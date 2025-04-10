import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  isVisible : boolean = true;
  text : string='';
  count : number = 100;
  state: string='';
  n1 : number = 0;
  n2 : number = 0;
  operation: string = '+';
  result: number = 0;
  
  password: string='';
  pass : boolean = false; 
  counter: number = 0;


  toggleParagraph()
  {
    this.isVisible = ! this.isVisible;
  }
  countwords()
  {
    this.count = 100-this.text.length;
  }
  calculate()
  {
      if(this.operation === '+'){
        this.result = this.n1 + this.n2;
      }
      else if(this.operation === '-'){
        this.result = this.n1 - this.n2;
      }
      else if(this.operation === '*'){
        this.result = this.n1 * this.n2;
      }
      else
      this.result = this.n1 / this.n2;
      
  }

  passDisplay(){
    this.pass = ! this.pass;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
}
}