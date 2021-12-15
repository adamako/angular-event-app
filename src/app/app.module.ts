import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  CollapsibleWellComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  NavComponent,
  NewEventComponent,
  NotFoundComponent,
  SessionsListComponent,
  SimpleModalComponent,
  UpvoteComponent,
} from './components';
import { AppComponent } from './components/app.component';
import { ModalDirective } from './directives/modal.directive';
import { LocationValidatorDirective } from './directives/validators/location-validator.directive';
import { appRoutes } from './routes/mainRoutes';
import { EventResolver, JQ_TOKEN, Toastr, TOASTR_TOKEN } from './services';
import { DurationPipe } from './utils/duration.pipe';

// @ts-ignore
let toastr: Toastr = window['toastr'];
// @ts-ignore
let jQuery = window['$'];

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
    SimpleModalComponent,
    ModalDirective,
    UpvoteComponent,
    LocationValidatorDirective,
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
      provide: TOASTR_TOKEN,
      useValue: toastr,
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery,
    },
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
