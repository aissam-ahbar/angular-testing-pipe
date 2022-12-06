import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './pipe/custompipe.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CustomPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
