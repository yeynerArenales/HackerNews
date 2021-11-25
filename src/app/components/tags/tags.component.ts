import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/tag'; 

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  public tags: Tag[] = [
    {title: "All"},
    {title: "My Faves"}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
