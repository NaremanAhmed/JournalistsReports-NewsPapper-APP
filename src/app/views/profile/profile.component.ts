import { Component, OnInit } from '@angular/core';
import { Journalists } from 'src/app/interfaces/journalistModels';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userServices: UserService,
  ) { }

  journalist: Journalists = {};
  getData() {
    this.userServices.getProfile().subscribe({
      next: (res: any) => {
        console.log(res);
        this.journalist=res
        console.log(this.journalist);
        
      },
    });
  }
  ngOnInit(): void {
    this.getData()
  }

}
