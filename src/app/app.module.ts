import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  NavComponent,
  NewEventComponent,
  NotFoundComponent,
} from './components';
import { AppComponent } from './components/app.component';
import { CreateSessionComponent } from './components/events/sessions/create-session/create-session.component';
import { SessionsListComponent } from './components/events/sessions/sessions-list/sessions-list.component';
import { appRoutes } from './routes/mainRoutes';
import { EventResolver } from './services';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    NewEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionsListComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

function checkDirtyState(component: NewEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel ?'
    );
  }
  return true;
}
