import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 0;
  constructor() {}
  public Caculate(n: number): number {
    return n * n;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): number {
    return (this.counter = n);
  }
}
