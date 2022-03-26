import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayUtilityService {
  constructor() {}

  reverse(arr: number[]) {
    return arr.reverse();
  }
  empty(arr: number[]) {
    return arr.length == 0;
  }
  sort(arr: number[]) {
    return arr.sort();
  }
  exists(arr: number[], value: number) {
    return arr.includes(value);
  }
}
