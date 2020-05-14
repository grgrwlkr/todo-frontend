import { Component, OnInit } from '@angular/core';
import { LIST } from "../../mocks/mock-list";
import { Entry } from "../../models/entry";
import { MatListOption } from "@angular/material/list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  // entry: Entry = {
  //   id: 1,
  //   title: "Title",
  //   description: "Description",
  //   done: false
  // };

  listEntries: Entry[] = LIST;
  doneList: Entry[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSelectionChange(option: MatListOption) {
    console.log(option);
    console.log(option.value);

    const indx = this.listEntries.indexOf(option.value);
    const doneItem = this.listEntries.splice(indx, 1);
    this.doneList.push(doneItem[0]);
  }

  trackByFn(index: number, entry: Entry) {
    return index;
  }
}
