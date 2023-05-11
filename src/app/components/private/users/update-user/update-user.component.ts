import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  userForm!: FormGroup;

  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService
  ) {
    let formControls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      role: new FormControl('Choisir un agent', [Validators.required]),
      birdhday: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
    };
    this.userForm = this.fb.group(formControls);
  }

  ngOnInit(): void {
    let idUser = this.route.snapshot.params['id'];
    this.id = idUser;
    console.log(this.id);
    console.log(idUser);

    this.service.getbyId(idUser).subscribe((result) => {
      let user = result;
      console.log(user);
      this.userForm.patchValue({
        firstname: user.firstnameUser,
        lastname: user.nameUser,
        email: user.emailUser,
        //  password:user.password,
        role: user.fonctionUser,
        cin: user.cinUser,
        telephone: user.phoneUser,
        birdhday: user.birthdateUser,
        adress: user.addressUser,
      });
    });
  }

  updateUser() {
    let data = this.userForm.value;
    console.log(data);

    const user = {
      idUser: this.id,
      emailUser: data.email,
      fonctionUser: data.role,
      cinUser: data.cin,
      nameUser: data.lastname,
      firstnameUser: data.firstname,
      birthdateUser: data.birdhday,
      addressUser: data.adress,
      phoneUser: data.telephone,
      passwordUser: data.password,
    };
    console.log(user);

    this.service.updateUser(user).subscribe((res) => {
      console.log(res);

      alert('User est Modifié');

      this.router.navigate(['/users']);
    });
  }
}

