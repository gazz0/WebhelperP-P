import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

<<<<<<< Updated upstream
=======

  name: string;
  description: string;
  type: string;
  setting: string;
  cultur: string;
  atmosphere: string;

>>>>>>> Stashed changes
  constructor() { }

  ngOnInit(): void {
  }
}
