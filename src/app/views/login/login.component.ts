import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  journalists: any;
  token: any;
  invalidLogin:boolean=false

  signIn(credentials: any) {
    console.log('test')
    this.authService.logIn(credentials).subscribe({
      next: (res: any) => {
        console.log(res);
        this.journalists = res;
        this.token = this.journalists.token;
        localStorage.setItem('token',this.token);
        this.router.navigate(['/profile'])
      },
      error:(httpError:any)=>{
        console.log(httpError);
        this.invalidLogin =true
      }
    })
  }

  ngOnInit(): void {
  }

}
