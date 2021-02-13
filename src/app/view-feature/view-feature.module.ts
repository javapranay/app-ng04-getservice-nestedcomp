import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserViewComponent
  ]
})
export class ViewFeatureModule { }
