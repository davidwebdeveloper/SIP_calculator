import { Component } from '@angular/core';
// import { ElementRef, ViewChild } from '@angular/core';
// import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SIP';
//   @ViewChild('doughnutChart', { static: true }) private chartContainer!: ElementRef;
//   time!:number
//   principal: number = 500;
//   rate: number = 5;
//   private chart: any;
// radius!:number
//   constructor() {}

//   ngAfterViewInit() {
//     this.createDoughnutChart();
//   }

//   private createDoughnutChart() {
//     const width = 400;
//     const height = 400;
//     this.radius = Math.min(width, height) / 2;

//     this.chart = d3.select(this.chartContainer.nativeElement).append('svg')
//       .attr('width', width)
//       .attr('height', height)
//       .append('g')
//       .attr('transform', `translate(${width / 2},${height / 2})`);

//     this.updateChart();
//   }

//   private updateChart() {
//     const total = this.principal + (this.principal * this.rate) / 100;
//     const data = [this.principal, (this.principal * this.rate) / 100];

//     const color = d3.scaleOrdinal(['#3498db', '#e74c3c']);

//     const pie = d3.pie();

//     const arc = d3.arc()
//       .innerRadius(this.radius - 100)
//       .outerRadius(this.radius);

//     this.chart.selectAll('*').remove(); // Clear existing elements

//     const arcs = this.chart.selectAll('.arc')
//       .data(pie(data))
//       .enter()
//       .append('g')
//       .attr('class', 'arc');

//     arcs.append('path')
//       .attr('d', arc)
//       .attr('fill', (d: any, i: number) => color(String(i)));

//     arcs.append('text')
//       .attr('transform', (d: any) => 'translate(' + arc.centroid(d) + ')')
//       .attr('dy', '0.35em')
//       .text((d: any) => d.data);

//     this.chart.append('text')
//       .attr('x', 0)
//       .attr('y', 0)
//       .attr('text-anchor', 'middle')
//       .text('Investment');

//     this.chart.append('text')
//       .attr('x', 0)
//       .attr('y', 20)
//       .attr('text-anchor', 'middle')
//       .text(this.principal);

//     this.chart.append('text')
//       .attr('x', 0)
//       .attr('y', 60)
//       .attr('text-anchor', 'middle')
//       .text('Interest Rate');

//     this.chart.append('text')
//       .attr('x', 0)
//       .attr('y', 80)
//       .attr('text-anchor', 'middle')
//       .text(this.rate + '%');
//   }

//   calculatepercentage() {
//     this.updateChart();
//   }
}
