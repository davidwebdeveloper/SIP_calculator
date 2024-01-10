import { Component } from '@angular/core';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss']
})
export class SipComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  calculateSimpleInterest(): number {
    return (this.principal * this.rate * this.time) / 100;
  }
  calculatetotalinvestment(){
    return (this.principal*this.time*12)
  }

  // calculateCompoundInterest(): number {
  //   return this.principal * Math.pow(1 + this.rate / 100, this.time) - this.principal;
  // }
}
