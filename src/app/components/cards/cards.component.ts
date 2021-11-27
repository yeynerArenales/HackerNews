import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public info: Article[] = [];

  constructor(
    private searchSvc: SearchService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.searchSvc.getInfo('angular', 0).subscribe(data => {
      this.info = this.setInfoData(data.hits)
      console.log(this.info)
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
