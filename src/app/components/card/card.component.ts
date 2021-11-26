import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() index: number = 0
  @Input() fav: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  isOdd(num: number): boolean{
      if (num%2 == 0)
        return true
      else
        return false
  }

}
