import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event: any;

    logFoo(){
        console.log("Logfoo");
    }
}