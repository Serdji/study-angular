import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrls: ['./add-form-contact.component.scss'],
})
export class AddFormContactComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: '',
      phone: '',
      email: '',
      website: '',
    });
  }

  addContact() {
    this.usersService.addUser( this.form.value )
    this.router.navigate(['list-contact'])
  }
}
