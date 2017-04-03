import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  public registerForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    passwordAgain: ['', Validators.required] // TODO: Add custom validator that checks if it's equal to password
  });

  ngOnInit() {}

  register(): void {
    console.log('valid state: ' + JSON.stringify(this.registerForm.value))
    // Not running for some reason
    if (this.registerForm.valid) {
      alert('You are logged in bitcha')
    }
  }
}