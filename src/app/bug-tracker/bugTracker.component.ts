import { Component } from '@angular/core';
import { IBug } from './models/iBug';
import { BugStorage } from './services/BugStorage.service';

@Component({
    selector: 'bug-tracker',
    templateUrl: 'bugTracker.component.html',
    styleUrls: ['bugTracker.style.css']
})
export class BugTrackerComponent {
    bugs : Array<IBug> = [];
    newBugName : string = '';

    constructor(public bugStorage : BugStorage) {
        this.bugs = this.bugStorage.getAll();
    }

    onSaveClick(bugName : string){
        var newBug : IBug = this.bugStorage.addNew(bugName);
        this.bugs = this.bugs.concat([newBug]);
    }

    onBugClick(bug: IBug) {
        this.bugs = this.bugs.map( b =>
            (b === bug) ? this.bugStorage.toggle(b):b
            );
    }

    onRemoveClosedClick() {
        var bugsToBeRemoved = this.bugs.filter(bug => bug.isClosed);
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
        bugsToBeRemoved.forEach(bug => this.bugStorage.remove(bug));
    }
}

