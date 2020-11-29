import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  numbers = [];
  types = ['Bubble Chart', 'Line Chart', 'Column Chart']
  selectedChart = 0
  dataPoints = []
  type = "bubble"
  constructor() { }

  ngOnInit(): void {
    this.findChain(837799)

  }
  findChain(number) {
    this.numbers = [number]
    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = 3 * number + 1;
      }
      this.numbers.push(number)
    }
    for (var i = 0; i < this.numbers.length; i++) {
      this.dataPoints.push({ x: i, y: this.numbers[i], z: 10 });
    }
    this.plotBubble()
  }
  plotBubble() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      title: {
        text: "Chain Sequence Chart"
      },
      backgroundColor: "#ECF9FA ",
      data: [
        {
          type: this.type,
          toolTipContent: "<br/>Step Number: {x}<br/> Number: {y}<br/>",
          dataPoints: this.dataPoints
        }]
    });

    chart.render();
  }

  selectChart(event) {
    this.selectedChart = event.target.value;
    if (event.target.value == 0) {
      this.type = "bubble"
    }
    if (event.target.value == 1) {
      this.type = "line"
    }
    if (event.target.value == 2) {
      this.type = "column"
    }
    this.plotBubble();
  }

}
