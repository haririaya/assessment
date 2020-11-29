import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-longest-sequence',
  templateUrl: './longest-sequence.component.html',
  styleUrls: ['./longest-sequence.component.css']
})
export class LongestSequenceComponent implements OnInit {
  selector = 0
  constructor() { }

  ngOnInit(): void {
  }


  choose(num) {
    this.selector = num
  }

}
