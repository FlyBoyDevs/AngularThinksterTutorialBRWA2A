import {Component, Input, OnInit} from '@angular/core';
import {Errors} from '../../models/errors.model';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (!errorList.errors) {
      return;
    }
    this.errorList.forEach(error => { this.formattedErrors.push(error + errorList.errors[error]); });
  }

  constructor() { }

  ngOnInit() {
  }

  get errorList() { return this.formattedErrors; }

}
