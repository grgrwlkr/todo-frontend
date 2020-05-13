import { Component, OnInit } from '@angular/core';
import { Entry } from "../../models/entry";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  entry: Entry = {
    id: 1,
    title: "Title",
    description: "Description",
    done: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
