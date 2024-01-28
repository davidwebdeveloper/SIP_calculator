import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as d3 from 'd3';

interface month {
  name: string;
  code: string;
}

interface Tenure {
  name: string;
  code: number;
}

const PredictionData =
  [
    70000, 95000, 80000, 75000, 70000, 67000, 85000, 87000, 95000, 65000,
    60000, 63000, 80000, 75000, 80000, 85000, 82000, 80000, 81000, 75000,
    82000, 60000, 65000, 95000, 90000, 77000, 76000, 75000, 78000, 75000,
    85000, 68000, 62000, 63000, 95000, 75000, 77000, 79000, 80000, 95000
  ]

const LT = [
  90000, 107500, 77000, 109000, 80500, 91000, 111250, 95000, 103500, 95000,
  90000, 113750, 77500, 107500, 117500, 105000, 80500, 77500, 95000, 95000,
  117500, 95000, 107500, 111250, 117500, 111250, 117500, 95000, 113750, 107500,
  107500, 117500, 109000, 95000, 77500, 117500, 111250, 95000, 117500, 117500,
  117500, 111250, 107500, 117500, 107500, 95000, 117500, 95000, 117500
]




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
  prediction!: number[]
  predictionAmount!: number[]
  finalValue: number = 0


  constructor(private cdr: ChangeDetectorRef) {
    // this.investpercentage = 1;
    // this.returnpercentage = 1;
    this.principal = 0;
    this.rate = 0;
    this.time = 0;
    // this.investment = 1;
    // this.simpleinterest = 1;
    this.bidAmount = 0
    this.bankRate = 0

    this.predictionAmount = []



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


    this.prediction = PredictionData

  }

  data: any;

  options: any;

  dynamic() {
    this.cdr.detectChanges(); this.prediction[4] = this.bidAmount
    console.log(this.prediction)
    this.calcPredictionAmount()
    console.log(this.predictionAmount)
    this.calcTotalInvestment()
  }

  calcPredictionAmount() {
    this.prediction.forEach((e, i) => {
      this.predictionAmount[i] = this.principal - ((this.calculatetotalinvestment() * (95 / 100)) - e) / this.time
    })
  }

  calcTotalInvestment() {
    this.finalValue = this.predictionAmount.reduce((acc, e) => acc + e, 0)
  }



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
