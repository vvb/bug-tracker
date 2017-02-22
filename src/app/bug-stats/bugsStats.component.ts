import { Component, Input } from '@angular/core';
import { IBug } from '../models/iBug';

@Component({
    selector: "bug-stats",
    template: `
    <section class="stats">
        <span class="closed"> {{ data | closedcount }} </span>
        <span> / </span>
        <span>{{data.length}}</span>
    </section>
    `
})
export class BugStatsComponent{
    @Input()
    data : Array<IBug> = [];
}
