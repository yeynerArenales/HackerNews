import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Framework } from 'src/app/models/framework';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private frameworkSelected$: Observable<string>;

  public frameworks: Framework[] = [
    { value: 'angular', title: "Angular" },
    { value: 'reactjs', title: "React" },
    { value: 'vuejs', title: "Vuejs" }
  ]
  public selectedFramework: any = "";

  constructor(
    private searchSvc: SearchService
  ) {
    this.frameworkSelected$ = this.searchSvc.getFramework()
  }

  ngOnInit(): void {
    this.frameworkSelected$.subscribe(
      framework => {
        this.selectedFramework = framework
      }
    )
  }

  frameworkChange() {
    localStorage.setItem("selectedFramework", this.selectedFramework)
    this.searchSvc.changeFramework(this.selectedFramework);
    this.searchSvc.changePageSelected(1);
  }

}
