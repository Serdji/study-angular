import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { asyncScheduler, Observable, observeOn, switchMap } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public total$: Observable<number> = this.usersService.usersTotalSubject$
    .pipe(
      observeOn( asyncScheduler ),
      switchMap( () => this.usersService.getUsersTotal()
        .pipe(
          map( ( { total } ) => total )
        )
      )
    )
  constructor( public usersService: UsersService ) {}
}
