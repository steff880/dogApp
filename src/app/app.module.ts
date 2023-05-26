import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { provideRouter } from '@angular/router';
import routeConfig from '../app/routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent, BioComponent],
  imports: [BrowserModule, RouterModule],
  // Enable Router fucntionality by adding provideRouter and passing on the routes configuration
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent],
})
export class AppModule {}
