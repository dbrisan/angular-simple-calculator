import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { CalculatorBrainComponent } from './calculator-brain/calculator-brain.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonToggleModule, MatRadioModule],
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    CalculatorBrainComponent,
    CalculatorDisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
