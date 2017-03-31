import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// bootstrap modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LandPageComponent } from './pages/land-page/land-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
