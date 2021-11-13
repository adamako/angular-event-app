import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  events: any;
  constructor(private eventsService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}
