import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
  .<h2>Hello World</h2>
  <img src="assets/images/basic-shield.png">
  `,
  styleUrls: ['./app.component.css']
})
export class EventAppComponent {
  title = 'ng-fundamentals';
}
