import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brute-force',
  templateUrl: './brute-force.component.html',
  styleUrls: ['./brute-force.component.css']
})
export class BruteForceComponent implements OnInit {
  head1 = "Explanation"
  head2 = "PseudoCode"
  biggestLength = 0
  startingPoint = NaN
  related1 = ''; 
  related2= '';
  explanation = [{"show": " You might have noticed that this page took some time to render", "related" : ""},
  {"show": " That is because the brute force method takes a long time", "related" : ""},
  {"show": " This method basically iterates over all numbers between 2 and 1 million", "related" : "for (let i = 2; i <= 1000000; i++) {"},
  {"show": " and updates entry based on the number being even ", "related" : "if even  currentNumber = currentNumber/2"},
  {"show": " and updates entry based on the number being odd ", "related" : "else currentNumber = 3*currentNumber +1 "},
  {"show": " and terminates when the number 1 is reached", "related" : " while(currentNumber !== 1){"},
  {"show": " It stores along the way the length of each chain", "related" : "length++; }"}, 
  {"show": "At the end, it stores the length of each chain in a variable", "related" : "      if (length > biggestLength ){ biggestLength = length"},
  {"show": "And the starting point in another variable", "related" : "        startingPoint = i}"}]


  pseudocode = [{"show": "biggestLength = 0; startingPoint = 0; var currentNumber;", "related" : ""},
  {"show": "for (let i = 2; i <= 1000000; i++) {", "related" : "This method basically iterates over all numbers between 2 and 1 million"},
  {"show": "let length  = 1; currentNumber  = i;", "related" : ""},
  {"related": " and terminates when the re 1 is reached", "show" : " while(currentNumber !== 1){"},
  {"related": " and updates entry based on the number being even ", "show" : "if even  currentNumber = currentNumber/2"},
  {"related": " and updates entry based on the number being odd ", "show" : "else currentNumber = 3*currentNumber +1 "},
  {"related": " It stores along the way the length of each chain", "show" : "length++; }"}, 
  {"related": "At the end, it stores the length of each chain in a variable", "show" : "      if (length > biggestLength ){ biggestLength = length"},
  {"related": "And the starting point in another variable", "show" : "        startingPoint = i}"}]
  constructor() { }

  ngOnInit(): void {
    this.bruteForce()
  }
  bruteForce() {
   
    this.startingPoint 
    var currentNumber
    for (let i = 2; i <= 1000000; i++) {
      let length = 1;
      currentNumber = i;
      while(currentNumber !== 1){
        if (currentNumber %2 == 0) {
          currentNumber = currentNumber/2
        } else {
          currentNumber = 3*currentNumber +1
        }
        length++;
      }
      if (length > this.biggestLength ){
        this.biggestLength = length
        this.startingPoint = i
      }
    }
  }
  updateRelated1(param){
    this.related1 = param;
  }
  updateRelated2(param){
    this.related2 = param;
  }
}
