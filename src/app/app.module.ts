import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilsModule } from './utils/utils.module'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugStatsComponent } from './bug-stats/bugsStats.component';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugOperations } from './bug-tracker/services/BugOperations.service';
import { BugStorage } from './bug-tracker/services/BugStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule
  ],
  providers: [
    BugOperations,
    BugStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
