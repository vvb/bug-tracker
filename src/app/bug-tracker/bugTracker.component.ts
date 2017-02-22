import { Component } from '@angular/core';
import { IBug } from './models/iBug';

@Component({
    selector: 'bug-tracker',
    templateUrl: 'bugTracker.component.html',
    styleUrls: ['bugTracker.style.css']
})
export class BugTrackerComponent {
    bugs : Array<IBug> = [];
    onSaveClick(bugName : string){
        var newBug : IBug = {
            name: bugName,
            isClosed: false
        }
        this.bugs.push(newBug); }
    onBugClick(bug: IBug) {
        bug.isClosed = !bug.isClosed;
    }
    getClosedCount(){
        var result = 0;
        for(var i=0; i < this.bugs.length; i++)
        if (this.bugs[i].isClosed)
            ++result;
        return result;
    }
    onRemoveClosedClick() {
        for (var i=this.bugs.length-1; i>=0; i--)
            if(this.bugs[i].isClosed)
                this.bugs.splice(i,1);
    }
}

