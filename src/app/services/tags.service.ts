import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private tagSelected = new BehaviorSubject<string>('All');

  constructor() {
  }

  changeTag(tag: string | null) {
    if (tag) {
      this.tagSelected.next(tag);
    }
  }

  getTag(): Observable<string> {
    return this.tagSelected.asObservable();
  }

}
