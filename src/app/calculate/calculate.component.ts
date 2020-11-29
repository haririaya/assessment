import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  numbers = []
  longest = []
  sliderValue = 10
  overlay = false;
  constructor() { }
  twoChartsView(numbers, longest) {
    let dataPoints = [];
    let max = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (this.numbers[i] > max) {
        max = this.numbers[i]
      }
      dataPoints.push({ x: i, y: numbers[i] });
    }
    let dataPoints2 = [];
    for (var i = 0; i < longest.length; i++) {
      if (this.longest[i] > max) {
        max = this.longest[i]
      }
      dataPoints2.push({ x: i, y: longest[i] });
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Chain Sequence Chart"
      },
      backgroundColor: "#ECF9FA ",
      axisY:{
        maximum: max,
      },
      data: [
        {
          type: "line",
          dataPoints: dataPoints,
          lineThickness: 5,
        },
        {
          type: "line",
          lineThickness: 1,
          dataPoints: dataPoints2,
        }]
    });

    chart.render();

  }
  ngOnInit(): void {
    this.findChain(10)
    this.findLongest(837799)
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
    if (!this.overlay){
      this.twoChartsView(this.numbers, [])
    } else {
      this.twoChartsView(this.numbers, this.longest)
    }

  }
  // can also be implemented recursively
  findLongest(number) {
    this.longest = [number]
    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = 3 * number + 1;
      }
      this.longest.push(number)
    }
  }
  valueChange(value) {
    if (value.target) {
      this.sliderValue = value.target.value
    } else {
      this.sliderValue = value['value']
    }
    this.findChain(this.sliderValue)
  }
  applyOverlay(event) {
    this.overlay = !this.overlay
    if (this.overlay) {
      this.twoChartsView(this.numbers, this.longest)
    } else {
      this.twoChartsView(this.numbers, [])
    }
  }

}
