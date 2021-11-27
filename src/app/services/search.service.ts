import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getInfo(framework: string, page: number): Observable<any> {
    let url: string = `https://hn.algolia.com/api/v1/search_by_date?query=${framework}&page=${page}&hitsPerPage=8`
    return this.http.get(url);
  }
  
}
