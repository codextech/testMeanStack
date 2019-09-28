import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
             ) { }

  ngOnInit() {

  }


  logout() {
   /*  this.authService.decodedtoken = null;
    this.authService.usertoken = null;
    localStorage.removeItem('access_token');
    // this.router.navigate(['/login']);
    this.toaster.success('Logged out');

    setTimeout(() => {
    window.location.href = '/login';
    }, 500); */

  }

}
