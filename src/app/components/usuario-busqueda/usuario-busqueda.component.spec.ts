import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBusquedaComponent } from './usuario-busqueda.component';

describe('UsuarioBusquedaComponent', () => {
  let component: UsuarioBusquedaComponent;
  let fixture: ComponentFixture<UsuarioBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
