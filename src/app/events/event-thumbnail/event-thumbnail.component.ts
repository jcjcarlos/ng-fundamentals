import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: ["event-thumbnail.component.css"]
})
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeClassByObject() {
        const isEarlyStart: boolean = this.event?.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
    }


    getStartTimeClassByString() {
        if (this.event?.time === '8:00 am')
            return "green bold";
    }

    getStartTimeClassByArray() {
        if (this.event?.time === '8:00 am')
            return ["green", "bold"];
    }

    getStartTimeStyleByObject() {
        if (this.event && this.event.time === '8:00 am') {
            return {color: "#003300", 'font-weight': "bold" };
        }
    }

}