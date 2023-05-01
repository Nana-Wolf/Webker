import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';


@NgModule({
  declarations: [
    MainComponent,
    ReversePipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
