import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
