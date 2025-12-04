import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { MatFormField, MatLabel, MatError, MatInput } from "@angular/material/input";

@Component({
  selector: 'app-step10-user-login',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput],
  templateUrl: './step10-user-login.html',
  styleUrl: './step10-user-login.css',
})
export class Step10UserLogin {

  invalidLogin: boolean = false;

    form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  })

    onSubmit() {
      console.log(this.form.value);
    }
}
