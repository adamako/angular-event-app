import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  constructor() {}

  @Input() count: number | undefined;
  @Input() set voted(val: any) {
    this.iconColor = val ? 'red' : 'white';
  }

  @Output() vote = new EventEmitter();
  iconColor: string | undefined;

  ngOnInit(): void {}

  onClick() {
    this.vote.emit({});
  }
}
