import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnInit {

  @Input('appChart') chartType: any;

  constructor(private elementRef: ElementRef) { }


  ngOnInit() {
    console.log(this.chartType);
    const data = [25,20,10,12,15];

    const svg = d3.select(this.elementRef.nativeElement).append("svg")
      .attr("width", 400)
      .attr("height", 400);

    svg.append('rect')
      .attr('x', 10)
      .attr('y', 30)
      .attr('width', 600)
      .attr('height', 40)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');

    const circles = svg.selectAll("circle")
      .data(data);
    
    circles.enter().append("circle")
      .attr('cx', (d, i) => {
          console.log("Item: " + d, "Index: " + i);
          return d * i;
        })
      .attr('cy', (d, i) => {
        console.log("Item: " + d);
        return d * (i  / 3);
      })
      .attr("r", (d) => {
        return d / 2;
      })
      .attr("fill", "red")
  }
}
