import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen = false;
  badge: number;
  currentUser: User;

  constructor(private elementRef: ElementRef,
              private auth: AuthService,
              private router: Router,
              ) {
  }

  ngOnInit() {
    this.auth.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }


  logout(): void {
    this.auth.logout();
    this.router.navigate(['/start']);
  }

}
