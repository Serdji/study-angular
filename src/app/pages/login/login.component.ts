import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { tap } from "rxjs";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private authService: AuthService,
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
    this.authService.signIn( this.form.value )
      .pipe(
        tap( ({ access_token }) => {
          console.log( access_token );
          localStorage.setItem( 'access_token', JSON.stringify( access_token ) )
        } ),
      )
      .subscribe( () =>  this.router.navigate(['add-contact']) )
  }

  clear() {
    this.form.reset()
  }
}
