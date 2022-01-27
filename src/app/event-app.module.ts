import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './events/events-list/events-list.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
