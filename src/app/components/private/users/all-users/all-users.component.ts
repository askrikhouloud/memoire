import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  userList: any[] = [];
  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUser().subscribe(
      (res) => {
        this.userList = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(user: any) {
    const model = {
      idUser: user.iduser,
    };

    console.log(model);

    this.service.deleteUser(model).subscribe(
      (result) => {
        console.log(result);
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
      },
    
    );
  }
}
