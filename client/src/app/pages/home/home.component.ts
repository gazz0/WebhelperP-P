import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getItems().subscribe(items => {
      this.items = items;
    }, error => {
      console.log(error.data);
    });
  }

}
