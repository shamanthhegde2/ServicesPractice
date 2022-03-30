import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayUtilityService {
  constructor() {}

  empty(arr: number[]) {
    return arr.length == 0;
  }
  sort(arr: number[]) {
    const newArr = [...arr];
    return newArr.sort();
  }
  exists(arr: number[], value: number) {
    return arr.includes(value);
  }
  reverse(arr: number[]) {
    const newArr = [...arr];
    return newArr.reverse();
  }
}
