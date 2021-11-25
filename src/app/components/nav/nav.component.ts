import { Component, OnInit } from '@angular/core';
import { IEvent, ISession } from '../../models/event.model';
import { EventService } from '../../services';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  events: IEvent[] = [];
  searchTerm: string | undefined;
  foundSessions: ISession | undefined;
  constructor(
    private eventService: EventService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  searchSession(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
