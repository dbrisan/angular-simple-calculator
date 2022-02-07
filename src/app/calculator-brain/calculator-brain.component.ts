import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { Operation } from '../models/operation';
import { Result } from '../models/result';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator-brain',
  templateUrl: './calculator-brain.component.html',
  styleUrls: ['./calculator-brain.component.css'],
})
export class CalculatorBrainComponent implements OnChanges {
  constructor(@Inject(CalculatorService) private calcService) {}

  @Input('operation') operation: Operation = Operation.Addition;
  @Input('number1') number1: string = '';
  @Input('number2') number2: string = '';

  ngOnChanges(changes: SimpleChanges) {
    let changeInOperation = changes['operation'];
    if (typeof changeInOperation !== 'undefined') {
      if (!changeInOperation.isFirstChange()) {
        this.calculate();
      }
    }

    let changeInNumber1 = changes['number1'];
    if (typeof changeInNumber1 !== 'undefined') {
      if (!changeInNumber1.isFirstChange()) {
        this.calculate();
      }
    }

    let changeInNumber2 = changes['number2'];
    if (typeof changeInNumber2 !== 'undefined') {
      if (!changeInNumber2.isFirstChange()) {
        this.calculate();
      }
    }
  }

  @Output() result = new EventEmitter<Result>();

  emitResult(res: Result) {
    this.result.emit(res);
  }

  calculate(): void {
    // TODO: why is this.operation !== Operation.Addition?
    // console.log('Brain is calculating operation: ' + this.operation);
    // switch (this.operation) {
    //   case Operation.Addition:
    //     this.emitResult(this.calcService.add(this.number1, this.number2));
    //     break;
    //   case Operation.Substraction:
    //     this.emitResult(this.calcService.substract(this.number1, this.number2));
    //     break;
    //   case Operation.Multiplication:
    //     this.emitResult(this.calcService.multiply(this.number1, this.number2));
    //     break;
    //   case Operation.Division:
    //     this.emitResult(this.calcService.divide(this.number1, this.number2));
    //     break;
    //   default:
    //     throw new Error('Unknown operation: ' + this.operation);
    //   // TODO: emit warning result!
    // }

    if (this.operation == Operation.Addition) {
      this.emitResult(this.calcService.add(this.number1, this.number2));
    } else if (this.operation == Operation.Substraction) {
      this.emitResult(this.calcService.substract(this.number1, this.number2));
    } else if (this.operation == Operation.Multiplication) {
      this.emitResult(this.calcService.multiply(this.number1, this.number2));
    } else if (this.operation == Operation.Division) {
      this.emitResult(this.calcService.divide(this.number1, this.number2));
    } else {
      throw new Error('Unknown operation: ' + this.operation);
    }
  }
}
