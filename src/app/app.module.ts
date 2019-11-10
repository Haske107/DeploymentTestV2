
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MonolithComponent } from './monolith/monolith.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatGridListModule, ScrollDispatchModule,
  
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
  ]),
  
  BrowserAnimationsModule ],

  declarations: [ AppComponent, HomeComponent, AboutComponent, FooterComponent, MonolithComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
