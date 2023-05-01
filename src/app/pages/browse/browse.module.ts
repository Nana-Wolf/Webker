import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrowseComponent,
    ViewerComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BrowseModule { }
