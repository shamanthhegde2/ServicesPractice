import { Component } from '@angular/core';
import { DateUtilityService } from './utilities/date-utility.service';
import { ArrayUtilityService } from './utilities/array-utility.service';
import { sample } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  first!: string;
  second!: string;
  days!: any;
  months!: any;
  same!: any;
  formatedDate!: any;
  sample: number[] = [5, 6, 2, 3, 1, 4];
  reverseArray!: number[];
  empty!: boolean;
  sorted!: number[];
  exists!: boolean;
  constructor(
    private dateUtil: DateUtilityService,
    private ArrayUtil: ArrayUtilityService
  ) {}
  submitCalled() {
    this.days = this.dateUtil.calculateDays(this.first, this.second);
    this.months = this.dateUtil.calculateMonths(this.first, this.second);
    this.same = this.dateUtil.compare(this.first, this.second);
    this.formatedDate = this.dateUtil.format(this.first, this.second);
    this.reverseArray = this.ArrayUtil.reverse(this.sample);
    console.log(this.reverseArray);
    this.empty = this.ArrayUtil.empty(this.sample);
    this.sorted = this.ArrayUtil.sort(this.sample);
    this.exists = this.ArrayUtil.exists(this.sample, 5);
  }
}
