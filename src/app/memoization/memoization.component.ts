import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoization',
  templateUrl: './memoization.component.html',
  styleUrls: ['./memoization.component.css']
})
export class MemoizationComponent implements OnInit {
  head1 = "Explanation"
  head2 = "PseudoCode"
  biggestLength = 0
  startingPoint = NaN
  related1 = '';
  related2 = '';
  explanation = [{ "show": " The concept of memoization is caching already computed values in an array to avoid recomputation", "related": "" },
  { "show": " It is much faster than the brute force and saves up on computation", "related": "" },
  { "show": " This method basically iterates over all numbers between 2 and 1 million", "related": "for (let i = 2; i <= 1000000; i++) {" },
  {
    "show": " but instead of computing from scratch the length of each chain started by the current number, it saves any computation already made in an array ",
    "related": "var memoArray = []"
  },
  { "show": " That way it only accumulates the extra nodes in the chain ", "related": "count++;" },
  { "show": " It also updates based on number being even  ", "related": "if even  currentNumber = currentNumber/2" },
  { "show": " and updates entry based on the number being odd ", "related": "else currentNumber = 3*currentNumber +1 " },
  {
    "show": " and terminates when the number 1 is reached or reaches a number whose length of chain was previously calculated",
    "related": "while (currentNumber !=1 && currentNumber >= i){"
  },
  { "show": "And it saves length found for iterated value in the array for future use", "related": "memoArray[i] = count + memoArray[currentNumber]" },
  { "show": "At the end, it stores the length of each chain in a variable", "related": "if (memoArray[i] > biggestLength) {biggestLength = memoArray[i]" },
  { "show": "And the starting point in another variable", "related": "startingPoint = i}" }]


  pseudocode = [{ "show": "biggestLength = 0; startingPoint = 0; var currentNumber;", "related": "" },
  {
    "related": " but instead of computing from scratch the length of each chain started by the current number, it saves any computation already made in an array ",
    "show": "var memoArray = []"
  },
  { "show": " for (let i = 0; i < 1000001; i++) {memoArray[i] = -1;}" },
  { "show": "memoArray[1] = 1" },
  { "show": "for (let i = 2; i <= 1000000; i++) {", "related": "This method basically iterates over all numbers between 2 and 1 million" },
  { "show": "currentNumber =i; var count = 0;", "related": "" },
  { "related": " and terminates when the number 1 is reached or reaches a number whose length of chain was previously calculated", "show": "while (currentNumber !=1 && currentNumber >= i){" },
  { "related": " That way it only accumulates the extra nodes in the chain ", "show": "count++;" },
  { "related": " and updates entry based on the number being even ", "show": "if even  currentNumber = currentNumber/2" },
  { "related": " and updates entry based on the number being odd ", "show": "else currentNumber = 3*currentNumber +1 " },
  { "related": "And it saves length found for iterated value in the array for future use", "show": "memoArray[i] = count + memoArray[currentNumber]" },
  { "related": "At the end, it stores the length of each chain in a variable", "show": "if (memoArray[i] > biggestLength) {biggestLength = memoArray[i]" },
  { "related": "And the starting point in another variable", "show": "startingPoint = i}" }]
  constructor() { }

  ngOnInit(): void {
    this.memoization()
  }
  memoization() {
    this.biggestLength = 0
    this.startingPoint
    var currentNumber
    var memoArray = []
    for (let i = 0; i < 1000001; i++) {
      memoArray[i] = -1;
    }
    memoArray[1] = 1
    for (let i = 2; i <= 1000000; i++) {
      currentNumber = i;
      var count = 0;
      while (currentNumber != 1 && currentNumber >= i) {
        count++;
        if (currentNumber % 2 == 0) {
          currentNumber = currentNumber / 2
        } else {
          currentNumber = 3 * currentNumber + 1
        }
      }
      memoArray[i] = count + memoArray[currentNumber]
      if (memoArray[i] > this.biggestLength) {
        this.biggestLength = memoArray[i]
        this.startingPoint = i
      }
    }
  }
  updateRelated1(param) {
    this.related1 = param;
  }
  updateRelated2(param) {
    this.related2 = param;
  }

}
