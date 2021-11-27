import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { FavesService } from 'src/app/services/faves.service';

import * as timeago from 'timeago.js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() index: number = 0
  @Input() fav: boolean = false
  @Input() story_url: string = ""
  @Input() story_title: string = ""
  @Input() created_at: string = ""
  @Input() author: string = ""

  public time = timeago;

  constructor(
    private favSvc: FavesService
  ) { }

  ngOnInit(): void {
    this.favSvc.getFaves()
    this.includeFav()
  }

  isOdd(num: number): boolean {
    if (num % 2 == 0)
      return true
    else
      return false
  }

  addToFavorite() {
    this.fav = true;
    this.favSvc.addFav(this.destructuringArticle());
  }

  destructuringArticle(): Article {
    let { author, story_title, story_url, created_at } = this
    return {
      author,
      story_title,
      story_url,
      created_at
    }
  }

  includeFav() {
    if (this.favSvc.includeFav(this.destructuringArticle()))
      this.fav = true
  }

  redirectTo(url: string){
    if(url != null){
      window.open(url, "_blank");
    }else{
      console.error("This news has no url.")
    }
  }

}
