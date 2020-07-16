import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.scss']
})
export class FilterTabComponent implements OnInit {

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
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
