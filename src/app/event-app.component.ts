import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `,
})
export class EventAppComponent {
  title = 'ng-events';
}
