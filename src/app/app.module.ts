import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { EventResolver } from './services/event/event.resolver';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    NewEventComponent,
    NotFoundComponent,
  ],

  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
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
