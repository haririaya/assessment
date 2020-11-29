import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LongestSequenceComponent } from './longest-sequence/longest-sequence.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BruteForceComponent } from './brute-force/brute-force.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MemoizationComponent } from './memoization/memoization.component';
import { CalculateComponent } from './calculate/calculate.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { VisualizeComponent } from './visualize/visualize.component';
import {MatInputModule } from '@angular/material/input';
const appRoutes: Routes = [
  { path: '', component: LongestSequenceComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LongestSequenceComponent,
    BruteForceComponent,
    TableViewComponent,
    MemoizationComponent,
    CalculateComponent,
    VisualizeComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
  	RouterModule.forRoot (appRoutes),
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
