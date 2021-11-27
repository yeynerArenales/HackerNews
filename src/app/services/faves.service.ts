import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class FavesService {

  constructor() { }

  getFaves(): Article[] {
    let favs: string | null = localStorage.getItem("faves");
    if (favs)
      return JSON.parse(favs)
    else
      return []
  }

  addFav(article: Article) {
    let faves: Article[] = this.getFaves()
    if (!faves.find(e => e.story_title == article.story_title)) {
      faves.push(article)
      localStorage.setItem("faves", JSON.stringify(faves))
    }
  }

  includeFav(article: Article): boolean {
    let faves: Article[] = this.getFaves()
    if (faves.find(e => e.story_title == article.story_title))
      return true
    else
      return false
  }
}
