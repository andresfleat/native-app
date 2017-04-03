import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {}

  login(): void {
    console.log('valid state: ' + JSON.stringify(this.loginForm.value))
    // Not running for some reason
    if (this.loginForm.valid) {
      alert('You are logged in bitcha')
    }
  }

  goToRegister(): void {
    this.router.navigate(['../register'], {relativeTo: this.route});
  }
}