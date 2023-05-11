import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  email: String = '';
  profilAdmin: any;
  constructor(private router: Router, private service: AuthService) {}
  ngOnInit(): void {
    this.profilAdmin = this.service.saveDataProfil();
    console.log(this.profilAdmin);
    this.email = this.profilAdmin.data.emailUser;
  }

  logout() {
    localStorage.removeItem('myToken');
    this.router.navigate(['/login']);
  }
}
