import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  sideBarOpen = true;
  items: Item[];

  constructor(private data: DataService) { }

  ngOnInit() { 
    this.getItems();
  }

  getItems(){
    this.data.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    }, error => { 
       console.log(error.data);
    });
    
  }


  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
