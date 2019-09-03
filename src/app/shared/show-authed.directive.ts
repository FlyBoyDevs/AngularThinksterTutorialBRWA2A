import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from './services/user.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {
  condition: boolean;

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

  constructor(private templateRef: TemplateRef<any>,
              private userService: UserService,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

}
