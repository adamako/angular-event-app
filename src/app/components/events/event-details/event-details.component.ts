import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../../../models/event.model';
import { EventService } from '../../../services';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  event: IEvent | undefined;
  addMode: boolean | undefined = false;
  filterBy: string = 'all';
  sortedBy: string | undefined = 'name';

  ngOnInit(): void {
    this.route.params.forEach((param) => {
      this.event = this.eventService.getEvent(+param['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event!!.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
