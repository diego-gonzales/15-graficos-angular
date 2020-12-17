import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [
    LineComponent,
    BarComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    LineComponent,
    BarComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
