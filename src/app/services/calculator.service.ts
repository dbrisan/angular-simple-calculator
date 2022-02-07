import { Injectable } from '@angular/core';
import { Operation } from '../models/operation';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  public add(number1: string, number2: string) {
    if (this.validate(number1) && this.validate(number2)) {
      var res = this.parse(number1) + this.parse(number2);
      return new Result(true, res.toString());
    } else {
      return this.error();
    }
  }

  public substract(number1: string, number2: string) {
    if (this.validate(number1) && this.validate(number2)) {
      var res = this.parse(number1) - this.parse(number2);
      return new Result(true, res.toString());
    } else {
      return this.error();
    }
  }

  public multiply(number1: string, number2: string) {
    if (this.validate(number1) && this.validate(number2)) {
      var res = this.parse(number1) * this.parse(number2);
      return new Result(true, res.toString());
    } else {
      return this.error();
    }
  }

  public divide(number1: string, number2: string) {
    if (this.validate(number1) && this.validate(number2)) {
      var n1 = this.parse(number1);
      var n2 = this.parse(number2);
      if (n2 == 0) {
        return this.error();
      }

      var res = n1 / n2;
      return new Result(true, res.toString());
    } else {
      return this.error();
    }
  }

  parse(num: string) {
    var s = num.replace(',', '.').trim();
    return Number(s);
  }

  validate(num: string) {
    if (typeof num !== 'undefined') {
      var s = num.replace(',', '.').trim();
      if (s.length == 0) return false;

      var n = Number(s);
      return !isNaN(n);
    } else {
      return false;
    }
  }

  error() {
    return new Result(false, 'Calculation failed');
  }
}
