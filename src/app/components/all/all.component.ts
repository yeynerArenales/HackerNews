import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(
    private searchSvc: SearchService
  ) { }

  ngOnInit(): void {
    this.getLocalStorageFramework()
  }

  getLocalStorageFramework(){
    let framework: string | null = localStorage.getItem('selectedFramework')
    if(framework != null){
      this.searchSvc.changeFramework(framework);
    }
  }

}
