import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { interval, Observable, switchMap, tap } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
  public total$: Observable<number> = interval(3000)
    .pipe(
      switchMap( () => this.usersService.getUsersTotal()
        .pipe(
          map( ( { total } ) => total )
        )
      )
    )

  constructor( public usersService: UsersService ) {}
}
