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
  private numberPages$: Observable<number>;
  private pageSelected$: Observable<number>;
  public framework: string = '';
  public tag: string = '';
  public pages: number = 8;
  public page: number = 1;
  public reload: boolean = false;
  public numberValidate: number = 0;

  constructor(
    private searchSvc: SearchService,
    private favsSvc: FavesService,
    private tagSvc: TagsService
  ) {
    this.frameworkSelected$ = this.searchSvc.getFramework()
    this.tag$ = this.tagSvc.getTag()
    this.numberPages$ = this.searchSvc.getNumberPages()
    this.pageSelected$ = this.searchSvc.getPageSelected()
  }

  ngOnInit(): void {
    this.tag$.subscribe(
      tag => {
        this.numberValidate ++
        if(this.numberValidate == 1){
          this.tag = tag;
          this.reload = true;
          this.validateTag(tag);
        }
      }
    )
    this.frameworkSelected$.subscribe(
      framework => {
        if (this.tag == 'All') {
          this.reload = true;
          this.framework = framework
          this.getInfo(framework, this.page)
        }
      }
    )
    this.numberPages$.subscribe(
      pag => this.pages = pag
    )
    this.pageSelected$.subscribe(
      p => {
        if(this.page != p ){
          this.reload = true;
          this.page = p;
          this.getInfo(this.framework, this.page)
        }
      }
    )
  }

  validateTag(tag: string) {
    console.log("validateTag")
    if (tag == 'All')
      this.getInfo(this.framework, this.page)
    else
      this.info = this.favsSvc.getFaves();
  }

  getfavs() {
    this.info = this.favsSvc.getFaves();
  }

  getInfo(framework: string, page: number) {
    if (framework != '' && this.reload) {
      this.reload = false;
      this.searchSvc.getInfo(framework, page).subscribe(data => {
        this.info = this.setInfoData(data.hits)
        this.validatePages(data.nbPages)
      }, err => {
        console.error(err)
      })
    }
  }

  setInfoData(data: any[]): Article[] {
    let response: Article[] = []
    data.forEach((element: any) => {
      response.push(this.destructuringArticle(element))
    })
    return response;
  }

  destructuringArticle(article: any): Article {
    let { author, story_title, story_url, created_at } = article
    return {
      author,
      story_title,
      story_url,
      created_at
    }
  }

  validatePages(nbPages: number) {
    if (nbPages != this.pages)
      this.searchSvc.changeNumberPages(nbPages)
  }


  deleteFav(event: any){
    this.favsSvc.deleteFav(event);
    if(this.tag != "All")
      this.getfavs()
  }
}
