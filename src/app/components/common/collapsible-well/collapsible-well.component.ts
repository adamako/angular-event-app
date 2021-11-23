import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css'],
})
export class CollapsibleWellComponent implements OnInit {
  visible: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}

  toggleContent() {
    this.visible = !this.visible;
  }
}
