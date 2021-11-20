import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '../../../../models/event.model';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit {
  constructor() {}
  @Input() sessions: ISession[] | undefined;
  ngOnInit(): void {}
}
