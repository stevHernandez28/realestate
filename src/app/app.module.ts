import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { TopInfoComponent } from './Components/nav-bar/top-info/top-info.component';
import { HeroComponent } from './Components/home/hero/hero.component';
import { SearchPropertyComponent } from './Components/home/hero/search-property/search-property.component';
import { CategoriesComponent } from './Components/home/categories/categories.component';
import { CoreFeaturesComponent } from './Components/home/core-features/core-features.component';
import { BannerComponent } from './Components/home/banner/banner.component';
import { VideoBannerComponent } from './Components/home/video-banner/video-banner.component';
import { ClientsFeedbacksComponent } from './Components/home/clients-feedbacks/clients-feedbacks.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AboutBusinessComponent } from './Components/about-us/about-business/about-business.component';
import { AboutFocusComponent } from './Components/about-us/about-focus/about-focus.component';
import { AboutAgentsComponent } from './Components/about-us/about-agents/about-agents.component';
import { AgentDetailsComponent } from './Components/agent-details/agent-details.component';
import { AgentDetailsContentComponent } from './Components/agent-details/agent-details-content/agent-details-content.component';
import { AgentDetailsContentFormComponent } from './Components/agent-details/agent-details-content/agent-details-content-form/agent-details-content-form.component';
import { PropertyComponent } from './Components/property/property.component';
import { PropertyListComponent } from './Components/property/property-list/property-list.component';
import { PropertyFilterComponent } from './Components/property/property-filter/property-filter.component';
import { PropertyListItemComponent } from './Components/property/property-list/property-list-item/property-list-item.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { FAQComponent } from './Components/faq/faq.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { TitleComponent } from './Components/title/title.component';
import { PropertyDetailsCarruselComponent } from './Components/property-details/property-details-carrusel/property-details-carrusel.component';


import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { PropertyDetailsContentComponent } from './Components/property-details/property-details-content/property-details-content.component';
import { PropertyDetailsSideContentComponent } from './Components/property-details/property-details-side-content/property-details-side-content.component';


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
    AgentDetailsContentFormComponent,
    PropertyComponent,
    PropertyListComponent,
    PropertyFilterComponent,
    PropertyListItemComponent,
    ContactMeComponent,
    FAQComponent,
    PropertyDetailsComponent,
    TitleComponent,
    PropertyDetailsCarruselComponent,
    PropertyDetailsContentComponent,
    PropertyDetailsSideContentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    DividerModule,
    AccordionModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    SliderModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
