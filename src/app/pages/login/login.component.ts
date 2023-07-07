import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      name: '',
      password: '',
    });
  }
  addContact() {
    console.log( this.form.value );
  }

  clear() {
    this.form.reset()
  }
}
