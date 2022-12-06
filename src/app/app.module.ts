import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomUppercasePipe } from './pipe/custom-uppercase.pipe';

@NgModule({
  declarations: [AppComponent, CustomUppercasePipe],
  imports: [BrowserModule],
  providers: [CustomUppercasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
