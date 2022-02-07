import { Component, Output, EventEmitter } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css'],
})
export class CalculatorFormComponent {
  enumSource = [];
  number1: string;
  number2: string;
  public operation: Operation;

  @Output('operation') updateOperation = new EventEmitter<Operation>();
  @Output('number1') updateNumber1 = new EventEmitter<string>();
  @Output('number2') updateNumber2 = new EventEmitter<string>();

  ngOnInit() {
    this.enumSource = this.populateEnum();
    this.operation = Operation.Addition;
    this.onSelectOperation(this.operation);
  }

  populateEnum() {
    let map: { id: number; name: string }[] = [];

    for (var n in Operation) {
      if (typeof Operation[n] === 'number') {
        map.push({ id: <any>Operation[n], name: n });
      }
    }
    return map;
  }

  public onSelectOperation(val: number) {
    this.operation = val;
    this.updateOperation.emit(this.operation);
  }

  public onNumber1Changed() {
    this.updateNumber1.emit(this.number1);
  }

  public onNumber2Changed() {
    this.updateNumber2.emit(this.number2);
  }
}
