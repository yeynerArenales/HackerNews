import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() title :string = "";

  constructor() { }

  ngOnInit(): void {
  }

  tagSelect( tag: string ): void{
    localStorage.setItem("tagSelected", tag);
  }

}
