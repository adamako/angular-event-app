import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../../../models/event.model';
import { EventService } from '../../../services';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent implements OnInit {
  isDirty = true;
  newEvent?: IEvent;
  constructor(private route: Router, private eventService: EventService) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/events']);
  }

  saveEvent(values: any) {
    console.log(values);
    this.isDirty = false;
    this.eventService.addEvent(values);
    this.route.navigate(['events']);
  }
}
