import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private frameworkSelected = new BehaviorSubject<string>('');
  private numberPages = new BehaviorSubject<number>(9);
  private pagedSelected = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) { }

  getInfo(framework: string = 'angular', page: number): Observable<any> {
    let url: string = `https://hn.algolia.com/api/v1/search_by_date?query=${framework}&page=${page}&hitsPerPage=8`
    return this.http.get(url);
  }

  changeFramework(framework: string | null) {
    if (framework) {
      this.frameworkSelected.next(framework);
    }
  }

  getFramework(): Observable<string> {
    return this.frameworkSelected.asObservable();
  }

  getNumberPages(): Observable<number> {
    return this.numberPages.asObservable();
  }

  changeNumberPages(pages: number) {
    this.numberPages.next(pages);
  }

  getPageSelected(): Observable<number> {
    return this.pagedSelected.asObservable();
  }

  changePageSelected(page: number) {
    this.pagedSelected.next(page);
  }
}
