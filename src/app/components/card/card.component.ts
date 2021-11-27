import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { FavesService } from 'src/app/services/faves.service';

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

  constructor(
    private favSvc: FavesService
  ) { }

  ngOnInit(): void {
    this.favSvc.getFaves()
  }

  isOdd(num: number): boolean {
    if (num % 2 == 0)
      return true
    else
      return false
  }

  addToFavorite() {
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

}
