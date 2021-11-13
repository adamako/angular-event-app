import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EventRouteActivatorService } from './services/event/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: NewEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
];
