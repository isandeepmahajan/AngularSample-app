import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //for submitting form with ng-model
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import {HttpModule} from  '@angular/http';
import {RouterModule, Routes, RouteReuseStrategy} from '@angular/router';

import { AboutComponent } from './components/about/about.component'

//For routing
const appRoutes: Routes=[
  {path:'',component:UserComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Form-Model link
    HttpModule ,// Service,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
