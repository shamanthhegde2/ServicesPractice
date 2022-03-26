import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilityService {
  constructor() {}
  calculateDays(date1: any, date2: any) {
    if (date1 == date2) return 0;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const daysInMilli: any = Math.abs(d2.getTime() - d1.getTime());
    const days = daysInMilli / (1000 * 3600 * 24);
    return days;
  }
  calculateMonths(date1: any, date2: any) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    let months: any = null;
    if (d2 > d1) {
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
    }
    return months <= 0 ? 0 : months;
  }
  compare(date1: any, date2: any): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getTime() === d2.getTime();
  }
  format(date1: any, date2: any): Object {
    const first = new Date(date1).toUTCString();
    const second = new Date(date2).toUTCString();
    return { first, second };
  }
}
