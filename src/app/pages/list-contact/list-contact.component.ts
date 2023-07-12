import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from "rxjs";
import { IUser } from "../../models/IUser";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {


  users$: Observable<IUser[]> = this.usersService.getUsers()

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
  }

  deleteUser( id: number ) {
    this.users$ = this.usersService.deleteUser( id )
  }
}
