import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// bootstrap modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

//Pages e Components
import { LandPageComponent } from './pages/land-page/land-page.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    SobreComponent,
    EquipeComponent,
    FaleConoscoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Angular2FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
