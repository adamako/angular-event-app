import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../../../models/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
  constructor() {}

  name: FormControl | undefined;
  presenter: FormControl | undefined;
  duration: FormControl | undefined;
  level: FormControl | undefined;
  abstract: FormControl | undefined;
  newSessionForm: FormGroup | undefined;
  @Output() saveNewSession = new EventEmitter<ISession>();

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(value: any) {
    let session: ISession = {
      id: 1,
      name: value.name,
      presenter: value.presenter,
      level: value.level,
      abstract: value.abstract,
      voters: [],
      duration: +value.duration,
    };
    this.saveNewSession.emit(session);
  }
}
