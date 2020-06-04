import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value: string;

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  toggleSidebar() {
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
