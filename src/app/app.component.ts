import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TagsService } from './services/tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hacker-news-app';

  private tag$: Observable<string>;
  public tag: string = ""

  constructor(
    private tagSvc: TagsService
  ){
    this.tag$ = this.tagSvc.getTag()
  }

  ngOnInit(){
    this.tag$.subscribe(
      tag => this.tag = tag
    )
  }
}
