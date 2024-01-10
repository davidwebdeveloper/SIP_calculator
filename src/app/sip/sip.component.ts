import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';


interface month {
  name: string;
  code: string;
}
@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss']
})
export class SipComponent implements OnInit {
  principal!: number
  rate!: number
  time!: number
  investment!: number
  simpleinterest!: number
  investpercentage!: number
  returnpercentage!: number
  months!: month[];

  constructor() {
    this.investpercentage = 1;
    this.returnpercentage = 1;
    this.principal = 1;
    this.rate = 1;
    this.time = 1;
    this.investment = 1;
    this.simpleinterest = 1;

  }
  ngOnInit(): void {
    this.months = [
      { name: '25', code: '25' },
      { name: '30', code: '30' },
      { name: '40', code: '40' },
      { name: '50', code: '50' },

    ];
  }

  data: any;

  options: any;
  calculateSimpleInterest(): number {
    this.simpleinterest = (this.principal * this.rate * (this.time / 12)) / 100
    return this.simpleinterest
  }
  calculatetotalinvestment() {
    this.investment = (this.principal * this.time)
    return this.investment
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  }

  @ViewChild('doughnutChart', { static: true }) private chartContainer!: ElementRef;

  radius!: number
  private chart: any;


  ngAfterViewInit() {
    this.createDoughnutChart();
  }

  private createDoughnutChart() {
    const width = 300;
    const height = 300;
    this.radius = Math.min(width, height) / 2;
    this.time = 1
    this.chart = d3.select(this.chartContainer.nativeElement).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    this.updateChart();
  }

  private updateChart() {
    const data = [this.principal * this.time * 12, (this.principal * this.rate * this.time) / 100];

    const color = d3.scaleOrdinal(['#EEF0FF', '#5367FF']);

    const pie = d3.pie();

    const arc = d3.arc()
      .innerRadius(this.radius - 70)
      .outerRadius(this.radius);




    this.chart.selectAll('*').remove(); // Clear existing elements

    const arcs = this.chart.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => color(String(i)));

    arcs.append('text')
      .attr('transform', (d: any) => 'translate(' + arc.centroid(d) + ')')
      .attr('dy', '0.35em')
      .text((d: any) => this.formatCurrency(d.data));


  }

  calculatepercentage() {
    this.updateChart();
  }
}




// this.chart.append('text')
//   .attr('x', 0)
//   .attr('y', 0)
//   .attr('text-anchor', 'middle')
//   .text('Investment');

// this.chart.append('text')
//   .attr('x', 0)
//   .attr('y', 20)
//   .attr('text-anchor', 'middle')
//   .text(this.principal);

// this.chart.append('text')
//   .attr('x', 0)
//   .attr('y', 50)
//   .attr('text-anchor', 'middle')
//   .text('Interest Rate');

// this.chart.append('text')
//   .attr('x', 0)
//   .attr('y', 70)
//   .attr('text-anchor', 'middle')
//   .text(this.rate + '%');