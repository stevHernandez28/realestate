import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopInfoComponent } from './nav-bar/top-info/top-info.component';
import { HeroComponent } from './home/hero/hero.component';
import { SearchPropertyComponent } from './home/hero/search-property/search-property.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CoreFeaturesComponent } from './home/core-features/core-features.component';
import { BannerComponent } from './home/banner/banner.component';
import { VideoBannerComponent } from './home/video-banner/video-banner.component';
import { ClientsFeedbacksComponent } from './home/clients-feedbacks/clients-feedbacks.component';
import { FooterComponent } from './footer/footer.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AboutBusinessComponent } from './about-us/about-business/about-business.component';
import { AboutFocusComponent } from './about-us/about-focus/about-focus.component';
import { AboutAgentsComponent } from './about-us/about-agents/about-agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentDetailsContentComponent } from './agent-details/agent-details-content/agent-details-content.component';
import { AgentDetailsContentFormComponent } from './agent-details/agent-details-content/agent-details-content-form/agent-details-content-form.component';


import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

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
    FooterComponent,
    AboutUsComponent,
    AboutBusinessComponent,
    AboutFocusComponent,
    AboutAgentsComponent,
    AgentDetailsComponent,
    AgentDetailsContentComponent,
    AgentDetailsContentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
