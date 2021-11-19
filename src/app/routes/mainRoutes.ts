import { Routes } from '@angular/router';
import {
  CreateSessionComponent,
  EventDetailsComponent,
  EventsListComponent,
  NewEventComponent,
  NotFoundComponent,
} from '../components';
import { EventResolver, EventRouteActivatorService } from '../services';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: NewEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventResolver },
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
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('../modules/user.module').then((m) => m.UserModule),
  },
];
