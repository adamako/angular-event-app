import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../../../../models/event.model';
import { AuthService, VoteService } from '../../../../services';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit, OnChanges {
  constructor(
    private voterService: VoteService,
    public authService: AuthService
  ) {}
  @Input() sessions: ISession[] | undefined;
  @Input() filterBy: string | undefined;
  @Input() sortedBy: string | undefined;
  visibleSessions: ISession[] | undefined = [];
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy!!);
      this.sortedBy === 'name'
        ? this.visibleSessions?.sort(sortByNameAsc)
        : this.visibleSessions?.sort(sortByVotes);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') this.visibleSessions = this.sessions;
    else
      this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLocaleLowerCase() === filter
      );
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.authService.currentUser?.userName!
      );
    } else {
      this.voterService.addVoter(
        session,
        this.authService.currentUser?.userName!
      );
    }

    if (this.sortedBy === 'votes') {
      this.visibleSessions?.sort(sortByVotes);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser?.userName!
    );
  }
}

const sortByNameAsc = (s1: ISession, s2: ISession) => {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s1.name) return 0;
  else return -1;
};

const sortByVotes = (s1: ISession, s2: ISession) => {
  return s2.voters.length - s1.voters.length;
};
