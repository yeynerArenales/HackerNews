import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { SearchService } from '../../services/search.service';
import { FavesService } from 'src/app/services/faves.service';
import { Observable } from 'rxjs';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 
  public info: Article[] = [];
  private frameworkSelected$: Observable<string>;
  private tag$: Observable<string>;
  public framework: string =  '';
  public tag: string = '';

  constructor(
    private searchSvc: SearchService,
    private favsSvc: FavesService,
    private tagSvc: TagsService
  ) {
    this.frameworkSelected$ = this.searchSvc.getFramework()
    this.tag$ = this.tagSvc.getTag()
   }

  ngOnInit(): void {
    this.tag$.subscribe(
      tag => {
        this.tag = tag;
        this.validateTag(tag);
      }
    )
    
    this.frameworkSelected$.subscribe(
      framework => {
        if(this.tag == 'All'){
          this.framework = framework
          this.getData(framework);
        }
      }
    )
    
  }

  validateTag(tag: string){
    if(tag == 'All')
      this.getInfo(this.framework)
    else
    this.info = this.favsSvc.getFaves();
  }

  getData(framework: string = ""){
    if(this.tag != 'All'){
      this.info = this.favsSvc.getFaves();
    }else{
      this.getInfo(framework)
    }
  }

  getfavs(){
    this.info = this.favsSvc.getFaves();
  }

  getInfo(framework: string){
    if(framework != ''){
      this.searchSvc.getInfo(framework, 0).subscribe(data => {
        this.info = this.setInfoData(data.hits)
      }, err => {
        console.error(err)
      })
    }
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
