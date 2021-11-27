import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-paged',
  templateUrl: './paged.component.html',
  styleUrls: ['./paged.component.css']
})
export class PagedComponent implements OnInit {

  private numberPages$: Observable<number>;
  public pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public page: number = 1;

  constructor(
    private searchSvc: SearchService,
  ) {
    this.numberPages$ = this.searchSvc.getNumberPages()
  }

  ngOnInit(): void {
    this.numberPages$.subscribe(
      pag => {
        this.setPages(pag);
      }
    )
  }

  changePage(page: number) {
    console.log(page)
    this.page = page;
    this.searchSvc.changePageSelected(page);
  }

  setPages(nbPages: number) {
    this.pages = []
    for (let index = 1; index <= nbPages; index++) {
      this.pages.push(index)
    }
  }

}
