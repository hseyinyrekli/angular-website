import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { LeftsidebarComponent } from './components/layouts/leftsidebar/leftsidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LayoutsComponent,
    NavbarComponent,
    LeftsidebarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
