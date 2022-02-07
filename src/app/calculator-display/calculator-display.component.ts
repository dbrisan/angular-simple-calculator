import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Result } from '../models/result';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css'],
})
export class CalculatorDisplayComponent implements OnInit, OnChanges {
  constructor() {}

  @Input('result') result: Result;

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['result'];
    if (typeof change !== 'undefined') {
      if (!change.isFirstChange()) {
        var res = change.currentValue as Result;
      }
    }
  }

  ngOnInit() {
    this.result = new Result(true, 'Nothing to display.');
  }
}
