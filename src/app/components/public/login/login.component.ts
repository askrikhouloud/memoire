import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  test: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    let formControlls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };
    this.loginForm = this.fb.group(formControlls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit() {}

  loginUser() {
    let data = this.loginForm.value;

    if (this.loginForm.invalid) {
      alert(' Vérfier votre champs  !');
    } else {
      const model = {
        emailUser: data.email,
        passwordUser: data.password,
      };

      this.service.loginUser(model).subscribe(
        (res) => {
          console.log(res);

          let token = res.token;

          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(token);
          console.log(decodedToken);

          if (decodedToken.data.fonctionUser == 'admin') {
            localStorage.setItem('myToken', token);
            this.router.navigate(['/dashboard']);
          } else {
            alert('accès non autorisé');
          }
        },
        (error) => {
          console.log(error);

          alert('la connexion à échoué, Vérifier les donneés');
        }
      );
    }
  }
}
