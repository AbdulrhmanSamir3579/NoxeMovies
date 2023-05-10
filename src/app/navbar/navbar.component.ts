import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servcies/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private _AuthenticationService:AuthenticationService){}

  ngOnInit(): void {
      this._AuthenticationService.userData.subscribe({
        next:()=>{
          if (this._AuthenticationService.userData.getValue() !== null){
            this.isLogin = true;
          }
          else {
            this.isLogin = false;
          }
        }
      })
  }

  logout(){
    this._AuthenticationService.logout();
  }
}
