import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDemoComponent } from './icon-demo/icon-demo.component';



@NgModule({
  declarations: [IconDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IconDemoComponent
  ]
})
export class IconDashboardModule { }
