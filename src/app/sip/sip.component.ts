import { Component } from '@angular/core';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss']
})
export class SipComponent {
  principal!: number
  rate!: number
  time!: number
  investment!: number
  simpleinterest!: number
  investpercentage!: number
  returnpercentage!: number
  constructor() {
    this.investpercentage = 1;
    this.returnpercentage = 1;
    this.principal = 1;
    this.rate = 1;
    this.time = 1;
    this.investment = 1;
    this.simpleinterest = 1;

  }

  data: any;

  options: any;
  calculateSimpleInterest(): number {
    this.simpleinterest = (this.principal * this.rate * this.time) / 100
    return this.simpleinterest
  }
  calculatetotalinvestment() {
    this.investment = (this.principal * this.time * 12)
    return this.investment
  }

  calculatepercentage() {
    console.log('before', this.investpercentage)
    // console.log('before',this.returnpercentage)
    const total = this.investment + this.simpleinterest
    this.investpercentage = (Number(this.investment / total) * 100)
    this.returnpercentage = (Number(this.simpleinterest / total) * 100)
    console.log('after', this.investpercentage)
    // console.log('before',this.returnpercentage)

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [this.investpercentage, this.returnpercentage],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
    return
  }


  ngOnInit() {

    this.calculatepercentage()
    // console.log(1/1)

  }


}
