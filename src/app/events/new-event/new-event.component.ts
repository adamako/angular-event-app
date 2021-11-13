import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/events']);
  }
}
