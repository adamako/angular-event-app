import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  constructor(private eventService: EventService) {}

  event: any;

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }
}
