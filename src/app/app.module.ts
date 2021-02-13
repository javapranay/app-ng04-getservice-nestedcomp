import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewFeatureModule } from './view-feature/view-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
