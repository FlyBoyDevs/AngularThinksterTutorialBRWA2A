import {Component, Input, OnInit} from '@angular/core';
import {Errors} from "../../models/errors.model";

@Component({
  selector: 'list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors){
    this.formattedErrors = [];

    if (!errorList.errors) {
      return;
    }
    for (let field in errorList.errors) {
      this.formattedErrors.push(field + errorList.errors[field]);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  get errorList() { return this.formattedErrors; }

}
