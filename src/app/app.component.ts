import { Component, Input } from '@angular/core';
import { Operation } from './models/operation';
import { Result } from './models/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input('operation') operation: Operation = Operation.Addition;
  public requestedOperation: Operation;

  @Input('number1') number1: string = '';
  public requestedNumber1: string;

  @Input('number2') number2: string = '';
  public requestedNumber2: string;

  @Input('result') result: Result;
  public resultToDisplay: Result;

  changeOperation(operation: Operation) {
    console.log('Parent received Operation: ' + operation);
    this.requestedOperation = operation;
  }

  changeNumber1(number1: string) {
    console.log('Parent received Number1: ' + number1);
    this.requestedNumber1 = number1;
  }

  changeNumber2(number2: string) {
    console.log('Parent received Number2: ' + number2);
    this.requestedNumber2 = number2;
  }

  changeResult(result: Result) {
    console.log(
      'Parent received Result: ' + result.message + ', ' + result.success
    );
    this.result = result;
    this.resultToDisplay = result;
  }

  title = 'Simple calculator';
}
