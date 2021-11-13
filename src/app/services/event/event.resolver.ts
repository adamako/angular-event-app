import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
