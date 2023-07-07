import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  public form: FormGroup;
  private userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initUserId();
    this.initForm();
  }

  initUserId() {
    this.route.params.subscribe(({ id }) => this.userId = +id );
  }

  initForm() {
    this.form = this.fb.group({
      username: '',
      phone: '',
      email: '',
      website: '',
    });
    this.form.patchValue(this.usersService.getUser( this.userId ))
  }

  updateUser(){
    this.usersService.updateUser( this.userId, this.form.value )
    this.router.navigate(['list-contact'])
  }

}
