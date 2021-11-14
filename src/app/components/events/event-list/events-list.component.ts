import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../../models/event';
import { EventService, ToastrService } from '../../../services';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleClickEvent(eventName: string) {
    this.toastrService.success(eventName);
  }
}