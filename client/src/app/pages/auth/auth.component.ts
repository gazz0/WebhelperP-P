import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AuthService} from './../../services/auth.service';
import { compareValidator } from 'src/app/helpers/compare-validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,

  ) {

  }

  // convenience getter for easy access to form fields
  get formLogin() {
    return this.loginForm.controls;
  }

  get formRegister() {
    return this.registerForm.controls;
  }

  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  resetForm() {
    this.registerForm.reset();
    this.registerForm.markAsUntouched();
    Object.keys(this.registerForm.controls).forEach((name) => {
      this.registerForm.controls[name].setErrors(null);
    });

    this.loginForm.reset();
    this.loginForm.markAsUntouched();
    Object.keys(this.loginForm.controls).forEach((name) => {
      this.loginForm.controls[name].setErrors(null);
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  changeStatus(e) {
    console.log(e.target.value);
  }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(
      { 
        email: this.formLogin.email.value, 
        password: this.formLogin.password.value
      })
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        });
  }

  onRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log('Fehler in Form Control');
      return;
    }

    this.loading = true;
    this.authenticationService.register(
      { 
        first_name: this.formRegister.first_name.value,
        last_name: this.formRegister.last_name.value,
        email: this.formRegister.email.value,
        password: this.formRegister.password.value
      })
      .subscribe(
        data => {
          this.resetForm();
        },
        error => {
          this.loading = false;
        });
  }

}
