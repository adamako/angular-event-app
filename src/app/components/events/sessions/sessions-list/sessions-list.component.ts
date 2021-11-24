import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../../../../models/event.model';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() sessions: ISession[] | undefined;
  @Input() filterBy: string | undefined;
  visibleSessions: ISession[] | undefined = [];
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy!!);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') this.visibleSessions = this.sessions;
    else
      this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLocaleLowerCase() === filter
      );
  }
}
