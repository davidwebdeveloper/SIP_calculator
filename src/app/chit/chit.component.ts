import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

interface month {
  name: string;
  code: string;
}

interface Tenure {
  name: string;
  code: number;
}


@Component({
  selector: 'app-chit',
  templateUrl: './chit.component.html',
  styleUrls: ['./chit.component.scss']
})
export class ChitComponent {
  principal!: number
  rate!: number
  time!: number
  investment!: number
  simpleinterest!: number
  investpercentage!: number
  returnpercentage!: number
  months!: month[];
  bidAmount!: number
  bankRate!: number
  tenures!: Tenure[]


  constructor() {
    // this.investpercentage = 1;
    // this.returnpercentage = 1;
    this.principal = 0;
    this.rate = 0;
    this.time = 0;
    // this.investment = 1;
    // this.simpleinterest = 1;
    this.bidAmount = 0
    this.bankRate = 0


  }
  ngOnInit(): void {
    this.months = [
      { name: '25', code: '25' },
      { name: '30', code: '30' },
      { name: '40', code: '40' },
      { name: '50', code: '50' },

    ];

    this.tenures = [
      { name: 'ST', code: 25 },
      { name: 'TT', code: 30 },
      { name: 'FT', code: 40 },
      { name: 'LT', code: 50 },

    ];
  }

  data: any;

  options: any;

  calculateSimpleInterest(): number {
    this.simpleinterest = (this.principal * this.rate * (this.time)) / 100
    return this.simpleinterest
  }
  calculatetotalinvestment() {
    this.investment = (this.principal * this.time)
    return this.investment
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  }

  calulateROI() {
    const total = (this.time * ((this.principal - ((this.calculatetotalinvestment() * (95 / 100)) - this.bidAmount) / this.time))) / (this.time * ((this.principal - ((this.calculatetotalinvestment() * (95 / 100))) / this.time)))

  }
  calculateAmount(): number {
    return Number(this.bidAmount) + Number(this.bidAmount * (this.bankRate / 100) * (this.time / 12));
  }



}
