import { NgModule } from '@angular/core';
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
