import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MainComponent,
    ReversePipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MainModule { }
