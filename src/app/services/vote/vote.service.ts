import { Injectable } from '@angular/core';
import { ISession } from '../../models/event.model';
import { EventService } from '../event/event.service';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(private eventService: EventService) {}

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some((voter) => voter === voterName);
  }
}
