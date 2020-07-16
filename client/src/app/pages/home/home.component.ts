import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userItems: Item[];
  user: User;

  constructor(private data: DataService, private auth: AuthService, private toast: ToastService) { }

  ngOnInit(): void {

    this.data.getUser(this.auth.getLoggedInUserId()).subscribe(user => {
      this.user = user;
      this.userItems = user.items;
      console.log(user);
    }, error => {
        this.toast.toastMessage(error, true);
    });
  }

}
