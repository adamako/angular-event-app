import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  CreateSessionComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  NavComponent,
  NewEventComponent,
  NotFoundComponent,
  SessionsListComponent,
} from './components';
import { AppComponent } from './components/app.component';
import { CollapsibleWellComponent } from './components/common/collapsible-well/collapsible-well.component';
import { appRoutes } from './routes/mainRoutes';
import { EventResolver } from './services';
import { DurationPipe } from './utils/duration.pipe';

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
    CollapsibleWellComponent,
    DurationPipe,
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
