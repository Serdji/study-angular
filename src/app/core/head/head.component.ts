import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  public total: number | undefined

  constructor( public usersService: UsersService ) {}

  ngOnInit(): void {
    setInterval( () => { this.total = this.usersService.getUsers().length }, 1000 )
  }
}
