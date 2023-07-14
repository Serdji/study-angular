import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { asyncScheduler, Observable, observeOn, switchMap, tap } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
  public total$: Observable<number> = this.usersService.usersTotalSubject$
    .pipe(
      observeOn( asyncScheduler ),
      tap( console.log ),
      switchMap( () => this.usersService.getUsersTotal()
        .pipe(
          map( ( { total } ) => total )
        )
      )
    )

  constructor( public usersService: UsersService ) {}
}
