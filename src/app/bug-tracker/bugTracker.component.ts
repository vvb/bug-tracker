import { Component } from '@angular/core';
import { IBug } from './models/iBug';
import { BugOperations } from './services/BugOperations.service';

@Component({
    selector: 'bug-tracker',
    templateUrl: 'bugTracker.component.html',
    styleUrls: ['bugTracker.style.css']
})
export class BugTrackerComponent {
    bugs : Array<IBug> = [];
    newBugName : string = '';

    constructor(public bugOperations : BugOperations) {
    }

    onSaveClick(bugName : string){
        var newBug : IBug = this.bugOperations.createNew(this.newBugName);
        this.bugs = this.bugs.concat([newBug]);
    }

    onBugClick(bug: IBug) {
        this.bugs = this.bugs.map( b =>
            (b === bug) ? this.bugOperations.toggle(b):b
            );
    }

    onRemoveClosedClick() {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }
}

