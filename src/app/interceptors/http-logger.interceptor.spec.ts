import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpLoggerInterceptor } from './http-logger.interceptor';
import { of } from 'rxjs';

describe('HttpLoggerInterceptor', () => {
  let interceptor: HttpLoggerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLoggerInterceptor],
    });

    interceptor = TestBed.inject(HttpLoggerInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should log the HTTP request', () => {
    const request = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        expect(req).toBe(request);
        return of({} as HttpEvent<any>);
      },
    };

    spyOn(console, 'log');
    interceptor.intercept(request, next).subscribe();

    expect(console.log).toHaveBeenCalledWith('HTTP Request:', request);
  });
});
