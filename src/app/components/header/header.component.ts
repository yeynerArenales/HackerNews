import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tagSvc : TagsService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("tagSelected") != 'All' && localStorage.getItem("tagSelected") != null)
      this.tagSvc.changeTag("myFaves")
  }

}
