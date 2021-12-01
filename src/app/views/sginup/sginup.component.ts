import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css'],
})
export class SginupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  journalists: any;
  token: any;
  invalidEmail: boolean = false;
  invalidAge: boolean = false;

  signUP(credentials: any) {
    console.log(credentials);
    this.authService.signUp(credentials).subscribe({
      next: (res: any) => {
        console.log(res);
        this.journalists = res;
        this.token = this.journalists.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/profile']);
      },
      error: (httpError: any) => {
        console.log(httpError);
        if (httpError.error.code === 11000) {
          this.invalidEmail = true;
        }
        if (httpError.error.errors.age.name === 'ValidatorError') {
          this.invalidAge = true;
        }
      },
    });
  }

  changeEmail() {
    this.invalidEmail = false;
  }
  changeAge() {
    this.invalidAge = false;
  }

  ngOnInit(): void {}
}
