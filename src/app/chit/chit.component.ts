import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

interface month {
  name: string;
  code: string;
}

interface Tenure {
  name: string;
  code: number;
}



// const PredictionData =
//   [
//     70000, 95000, 80000, 75000, 70000, 67000, 85000, 87000, 95000, 65000,
//     60000, 63000, 80000, 75000, 80000, 85000, 82000, 80000, 81000, 75000,
//     82000, 60000, 65000, 95000, 90000, 77000, 76000, 75000, 78000, 75000,
//     85000, 68000, 62000, 63000, 95000, 75000, 77000, 79000, 80000, 95000
//   ]

const PredictionData =
  [
    0.7, 0.95, 0.80000, 0.75000, 0.70000, 0.67000, 0.85000, 0.87000, 0.65000,
    0.60000, 0.63000, 0.80000, 0.75000, 0.80000, 0.85000, 0.82000, 0.80000, 0.81000, 0.75000,
    0.82000, 0.60000, 0.65000, 0.95000, 0.90000, 0.77000, 0.76000, 0.75000, 0.78000, 0.75000,
    0.85000, 0.68000, 0.62000, 0.63000, 0.95000, 0.75000, 0.77000, 0.79000, 0.80000, 0.95000
  ]




// const LT = [
//   90000, 107500, 77000, 109000, 80500, 91000, 111250, 95000, 103500, 95000,
//   90000, 113750, 77500, 107500, 117500, 105000, 80500, 77500, 95000, 95000,
//   117500, 95000, 107500, 111250, 117500, 111250, 117500, 95000, 113750, 107500,
//   107500, 117500, 109000, 95000, 77500, 117500, 111250, 95000, 117500, 117500,
//   117500, 111250, 107500, 117500, 107500, 95000, 117500, 95000, 117500, 88000
// ]

const LT = [0.9, 1.075, 0.77, 1.09, 0.805, 0.91, 1.1125, 0.95, 1.035, 0.95, 0.9, 1.1375, 0.775, 1.075, 1.175, 1.05, 0.805, 0.775, 0.95, 0.95, 1.175, 0.95, 1.075, 1.1125, 1.175, 1.1125, 1.175, 0.95, 1.1375, 1.075, 1.075, 1.175, 1.09, 0.95, 0.775, 1.175, 1.1125, 0.95, 1.175, 1.175, 1.175, 1.1125, 1.075, 1.175, 1.075, 0.95, 1.175, 0.95, 1.175, 0.88]


// const ST = [
//   40000, 45000, 50000, 55000, 59000,
//   42000, 47000, 51000, 53000, 56000,
//   38000, 43000, 48000, 52000, 57000,
//   39000, 44000, 46000, 54000, 58000,
//   37000, 49000, 52000, 56000, 59000
// ]

const ST = [0.4, 0.45, 0.5, 0.55, 0.59, 0.42, 0.47, 0.51, 0.53, 0.56, 0.38, 0.43, 0.48, 0.52, 0.57, 0.39, 0.44, 0.46, 0.54, 0.58, 0.37, 0.49, 0.52, 0.56, 0.59]


// const TT = [
//   47000, 51000, 52000, 58000, 60000,
//   47000, 49000, 57000, 66000, 70000,
//   48000, 50000, 56000, 65000, 69000,
//   49000, 52000, 55000, 63000, 67000,
//   50000, 53000, 54000, 62000, 66000,
//   51000, 54000, 53000, 60000, 71250
// ]

const TT = [0.47, 0.51, 0.52, 0.58, 0.6, 0.47, 0.49, 0.57, 0.66, 0.7, 0.48, 0.5, 0.56, 0.65, 0.69, 0.49, 0.52, 0.55, 0.63, 0.67, 0.5, 0.53, 0.54, 0.62, 0.66, 0.51, 0.54, 0.53, 0.6, 0.7125]



const dropdownDataST = [
  { name: '1st Month', code: 1 },
  { name: '3rd Month', code: 3 },
  { name: '4th Month', code: 4 },
  { name: '5th Month', code: 5 },
  { name: '6th Month', code: 6 },
  { name: '7th Month', code: 7 },
  { name: '8th Month', code: 8 },
  { name: '9th Month', code: 9 },
  { name: '10th Month', code: 10 },
  { name: '11th Month', code: 11 },
  { name: '12th Month', code: 12 },
  { name: '13th Month', code: 13 },
  { name: '14th Month', code: 14 },
  { name: '15th Month', code: 15 },
  { name: '16th Month', code: 16 },
  { name: '17th Month', code: 17 },
  { name: '18th Month', code: 18 },
  { name: '19th Month', code: 19 },
  { name: '20th Month', code: 20 },
  { name: '21st Month', code: 21 },
  { name: '22nd Month', code: 22 },
  { name: '23rd Month', code: 23 },
  { name: '24th Month', code: 24 },
  { name: '25th Month', code: 25 }
];

const dropdownDataFT = [
  { name: '1st Month', code: 1 },
  { name: '3rd Month', code: 3 },
  { name: '4th Month', code: 4 },
  { name: '5th Month', code: 5 },
  { name: '6th Month', code: 6 },
  { name: '7th Month', code: 7 },
  { name: '8th Month', code: 8 },
  { name: '9th Month', code: 9 },
  { name: '10th Month', code: 10 },
  { name: '11th Month', code: 11 },
  { name: '12th Month', code: 12 },
  { name: '13th Month', code: 13 },
  { name: '14th Month', code: 14 },
  { name: '15th Month', code: 15 },
  { name: '16th Month', code: 16 },
  { name: '17th Month', code: 17 },
  { name: '18th Month', code: 18 },
  { name: '19th Month', code: 19 },
  { name: '20th Month', code: 20 },
  { name: '21st Month', code: 21 },
  { name: '22nd Month', code: 22 },
  { name: '23rd Month', code: 23 },
  { name: '24th Month', code: 24 },
  { name: '25th Month', code: 25 },
  { name: '26th Month', code: 26 },
  { name: '27th Month', code: 27 },
  { name: '28th Month', code: 28 },
  { name: '29th Month', code: 29 },
  { name: '30th Month', code: 30 },
  { name: '31st Month', code: 31 },
  { name: '32nd Month', code: 32 },
  { name: '33rd Month', code: 33 },
  { name: '34th Month', code: 34 },
  { name: '35th Month', code: 35 },
  { name: '36th Month', code: 36 },
  { name: '37th Month', code: 37 },
  { name: '38th Month', code: 38 },
  { name: '39th Month', code: 39 },
  { name: '40th Month', code: 40 }
];

const dropdownDataLT = [
  { name: '1st Month', code: 1 },
  { name: '3rd Month', code: 3 },
  { name: '4th Month', code: 4 },
  { name: '5th Month', code: 5 },
  { name: '6th Month', code: 6 },
  { name: '7th Month', code: 7 },
  { name: '8th Month', code: 8 },
  { name: '9th Month', code: 9 },
  { name: '10th Month', code: 10 },
  { name: '11th Month', code: 11 },
  { name: '12th Month', code: 12 },
  { name: '13th Month', code: 13 },
  { name: '14th Month', code: 14 },
  { name: '15th Month', code: 15 },
  { name: '16th Month', code: 16 },
  { name: '17th Month', code: 17 },
  { name: '18th Month', code: 18 },
  { name: '19th Month', code: 19 },
  { name: '20th Month', code: 20 },
  { name: '21st Month', code: 21 },
  { name: '22nd Month', code: 22 },
  { name: '23rd Month', code: 23 },
  { name: '24th Month', code: 24 },
  { name: '25th Month', code: 25 },
  { name: '26th Month', code: 26 },
  { name: '27th Month', code: 27 },
  { name: '28th Month', code: 28 },
  { name: '29th Month', code: 29 },
  { name: '30th Month', code: 30 },
  { name: '31st Month', code: 31 },
  { name: '32nd Month', code: 32 },
  { name: '33rd Month', code: 33 },
  { name: '34th Month', code: 34 },
  { name: '35th Month', code: 35 },
  { name: '36th Month', code: 36 },
  { name: '37th Month', code: 37 },
  { name: '38th Month', code: 38 },
  { name: '39th Month', code: 39 },
  { name: '40th Month', code: 40 },
  { name: '41st Month', code: 41 },
  { name: '42nd Month', code: 42 },
  { name: '43rd Month', code: 43 },
  { name: '44th Month', code: 44 },
  { name: '45th Month', code: 45 },
  { name: '46th Month', code: 46 },
  { name: '47th Month', code: 47 },
  { name: '48th Month', code: 48 },
  { name: '49th Month', code: 49 },
  { name: '50th Month', code: 50 }
];

const dropdownDataTT = [
  { name: '1st Month', code: 1 },
  { name: '3rd Month', code: 3 },
  { name: '4th Month', code: 4 },
  { name: '5th Month', code: 5 },
  { name: '6th Month', code: 6 },
  { name: '7th Month', code: 7 },
  { name: '8th Month', code: 8 },
  { name: '9th Month', code: 9 },
  { name: '10th Month', code: 10 },
  { name: '11th Month', code: 11 },
  { name: '12th Month', code: 12 },
  { name: '13th Month', code: 13 },
  { name: '14th Month', code: 14 },
  { name: '15th Month', code: 15 },
  { name: '16th Month', code: 16 },
  { name: '17th Month', code: 17 },
  { name: '18th Month', code: 18 },
  { name: '19th Month', code: 19 },
  { name: '20th Month', code: 20 },
  { name: '21st Month', code: 21 },
  { name: '22nd Month', code: 22 },
  { name: '23rd Month', code: 23 },
  { name: '24th Month', code: 24 },
  { name: '25th Month', code: 25 },
  { name: '26th Month', code: 26 },
  { name: '27th Month', code: 27 },
  { name: '28th Month', code: 28 },
  { name: '29th Month', code: 29 },
  { name: '30th Month', code: 30 },

];












@Component({
  selector: 'app-chit',
  templateUrl: './chit.component.html',
  styleUrls: ['./chit.component.scss']
})
export class ChitComponent implements OnChanges {
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
  investmentMonth: number = 0
  investmentOptions: any[] = []
  checked: boolean = false;
  newinterest!: number
  newval: number[] = []
  finalval!: number
  joinmonth!: number
  constructor(private cdr: ChangeDetectorRef) {
    this.principal = 0;
    this.rate = 0;
    this.time = 0;
    this.bidAmount = 0
    this.bankRate = 0
    this.predictionAmount = []
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hi')
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


    // this.prediction = PredictionData

  }

  data: any;

  options: any;
  
  dynamic() {

    this.cdr.detectChanges(); this.prediction[this.investmentMonth - 1] = this.bidAmount
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


  onTenureChange() {
    console.log('try', this.time)
    if (this.time == 40) {
      this.prediction = PredictionData.map((e) => {
        return e * this.calculatetotalinvestment()
      })
      this.investmentOptions = dropdownDataFT
      this.dynamic()
    } else if (this.time == 50) {
      this.prediction = LT.map((e) => {
        return e * this.calculatetotalinvestment()
      })

      this.investmentOptions = dropdownDataLT
      this.dynamic()
    } else if (this.time == 25) {
      this.prediction = ST.map((e) => {
        return e * this.calculatetotalinvestment()
      })

      this.investmentOptions = dropdownDataST
      this.dynamic()
    } else if (this.time == 30) {
      this.prediction = TT.map((e) => {
        return e * this.calculatetotalinvestment()
      })

      this.investmentOptions = dropdownDataTT
      this.dynamic()
    }

  }


  getFirstColumnRows(): number[] {
    const halfLength = Math.ceil(this.predictionAmount.length / 2);
    return Array.from({ length: halfLength }, (_, i) => i + 1);
  }

  getSecondColumnRows(): number[] {
    const halfLength = Math.ceil(this.predictionAmount.length / 2);
    return Array.from({ length: this.predictionAmount.length - halfLength }, (_, i) => i + halfLength + 1);
  }


  OnChange() {
    console.log('change')
  }
  interestcalculate() {
    const val = this.prediction
    console.log(val)
    this.newval = val.map((e, i) => {
      if (i < this.joinmonth - 1) {
        return (((e * this.newinterest) / 100) + e)
      }
      else {
        return e
      }
    })
    console.log("val", this.newval)
    this.dynamic2()
  }
  dynamic2() {
    this.cdr.detectChanges(); this.prediction[this.investmentMonth - 1] = this.bidAmount
    console.log(this.prediction)
    this.calcPredictAmount()
    console.log(this.predictionAmount)
    this.calcTotalInvestment2()
  }
  calcPredictAmount() {
    this.newval.forEach((e, i) => {
      this.predictionAmount[i] = this.principal - ((this.calculatetotalinvestment() * (95 / 100)) - e) / this.time
    })
  }
  calcTotalInvestment2() {
    this.finalval = this.predictionAmount.reduce((acc, e) => acc + e, 0)
    console.log("pred", this.predictionAmount)
    console.log("final", this.finalval)
  }
}
