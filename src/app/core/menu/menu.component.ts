import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public total: number | undefined

  constructor( public usersService: UsersService ) {}

  ngOnInit(): void {
    setInterval( () => { this.total = this.usersService.getUsers().length }, 1000 )
  }
}
