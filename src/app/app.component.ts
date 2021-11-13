import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <event-list></event-list>
  `,
})
export class AppComponent {
  title = 'event-app';
}
