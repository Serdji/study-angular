import { Component } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private usersService: UsersService) {
    this.usersService.usersTotalSubject$.next()
  }
}
