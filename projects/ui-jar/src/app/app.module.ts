import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCmpComponent } from './components/test-cmp/test-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
