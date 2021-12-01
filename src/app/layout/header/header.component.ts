import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authServices:AuthService
  ) { }
  
  logout(){
    this.authServices.logout().subscribe(()=>{})
    localStorage.removeItem('token')
  }

  get isLogiedIn(){
    let token=this.authServices.getToken()
    if(token){
      return true
    }
    return false
  }

  ngOnInit(): void {
  }

}
