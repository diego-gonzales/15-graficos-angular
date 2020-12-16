import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [
    LineComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    LineComponent,
    BarComponent
  ]
})
export class ComponentsModule { }
