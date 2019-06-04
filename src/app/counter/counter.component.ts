import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 
 @Input() othersCount: number = 0;
 @Input() myCount: number = 1;

  @Output() Count = new EventEmitter();

     
  upCount() {
    if (this.myCount == 1)
        return;

    this.myCount++;

    this.Count.emit({ myCount: this.myCount });
  }

  downCount() {
    if (this.myCount == -1)
        return;
        
    this.myCount--;

    this.Count.emit({ myCount: this.myCount });
  }

  get totalCounts() {
    return this.othersCount + this.myCount;
  } 

 

}
