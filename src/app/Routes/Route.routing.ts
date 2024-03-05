import { Routes } from "@angular/router";
import { HomeComponent } from "../Components/home/home.component";
import { AboutUsComponent } from "../Components/about-us/about-us.component";
import { AgentDetailsComponent } from "../Components/agent-details/agent-details.component";
import { ContactMeComponent } from "../Components/contact-me/contact-me.component";
import { FAQComponent } from "../Components/faq/faq.component";
import { PropertyComponent } from "../Components/property/property.component";
import { PropertyDetailsComponent } from "../Components/property-details/property-details.component";

export const routes : Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    {path: 'property',component: PropertyComponent},
    { path: 'agentdetails', component: AgentDetailsComponent },
    { path: 'contact', component: ContactMeComponent },
    { path: 'faq', component: FAQComponent },
    {path:'property-details/:id', component: PropertyDetailsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
]