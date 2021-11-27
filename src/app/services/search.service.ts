import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private frameworkSelected = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getInfo(framework: string = 'angular', page: number): Observable<any> {
    let url: string = `https://hn.algolia.com/api/v1/search_by_date?query=${framework}&page=${page}`
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
  
}
