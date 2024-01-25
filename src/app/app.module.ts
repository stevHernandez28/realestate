import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopInfoComponent } from './home/hero/top-info/top-info.component';
import { HeroComponent } from './home/hero/hero.component';
import { SearchPropertyComponent } from './home/hero/search-property/search-property.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CoreFeaturesComponent } from './home/core-features/core-features.component';
import { BannerComponent } from './home/banner/banner.component';
import { VideoBannerComponent } from './home/video-banner/video-banner.component';
import { ClientsFeedbacksComponent } from './home/clients-feedbacks/clients-feedbacks.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TopInfoComponent,
    HeroComponent,
    SearchPropertyComponent,
    CategoriesComponent,
    CoreFeaturesComponent,
    BannerComponent,
    VideoBannerComponent,
    ClientsFeedbacksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
