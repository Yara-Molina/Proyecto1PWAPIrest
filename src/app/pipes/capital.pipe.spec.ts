import { Pipe } from "@angular/core";
import { CapitalizarPipe } from "./capital.pipe";


describe('CapitalPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizarPipe();
    expect(pipe).toBeTruthy();
  });
});
