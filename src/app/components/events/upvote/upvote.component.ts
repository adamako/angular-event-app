import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  constructor() {}

  @Input() count: number | undefined;
  @Input() voted: boolean | undefined;
  @Output() vote = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.vote.emit({});
  }
}
