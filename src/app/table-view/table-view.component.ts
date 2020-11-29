import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() head: string
  @Input() data: any[];
  @Output() highlight: EventEmitter<any> = new EventEmitter();
  @Input() related: string;
  constructor() { }

  ngOnInit(): void {
  }
  mouseOver(matchingSentence) {
    console.log(matchingSentence)
    this.highlight.emit(matchingSentence);
  }


}
