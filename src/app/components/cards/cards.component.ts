import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { SearchService } from '../../services/search.service';
import { FavesService } from 'src/app/services/faves.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public info: Article[] = [];
  @Input() favs: boolean = false;

  constructor(
    private searchSvc: SearchService,
    private favsSvc: FavesService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.favs){
      this.info = this.favsSvc.getFaves();
    }else{
      this.getInfo()
    }
  }

  getfavs(){
    this.info = this.favsSvc.getFaves();
  }

  getInfo(){
    this.searchSvc.getInfo('angular', 0).subscribe(data => {
      this.info = this.setInfoData(data.hits)
    }, err => {
      console.error(err)
    })
  }

  setInfoData(data: any[]): Article[] {
    let response : Article[] = []
    data.forEach((element: any) => {
      response.push(this.destructuringArticle(element))
    })
    return response;
  }

  destructuringArticle(article: any): Article{
    let { author, story_title, story_url, created_at} = article
    return{
      author,
      story_title,
      story_url,
      created_at
    } 
  }

}
