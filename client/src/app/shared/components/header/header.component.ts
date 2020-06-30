import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchWord: string;
  value: string;

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();


  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }  
  searchThis() {
    this.data.searchCriteria.emit(this.searchWord)
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
