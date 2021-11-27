import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private tagSelected = new Subject<string>();

  constructor() { }

  changeTag(tag: string) {
    this.tagSelected.next(tag);
  }

  getTag(): Observable<string> {
    return this.tagSelected.asObservable();
  }

}
