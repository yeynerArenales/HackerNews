import { Component, OnInit } from '@angular/core';
import { Framework } from 'src/app/models/framework';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public frameworks: Framework[] = [
    { value: 'angular', title: "Angular"},
    { value: 'react', title: "React"},
    { value: 'vue', title: "Vuejs"}
  ]
  public selectedFramework: any = null;

  constructor() { }

  ngOnInit(): void {

  }

}
