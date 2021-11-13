import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleClickEvent(eventName: string) {
    this.toastrService.success(eventName);
  }
}
