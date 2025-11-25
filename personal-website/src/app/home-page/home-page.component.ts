import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutContactComponent } from '../about-contact/about-contact.component';
import { FeaturedProjectsComponent } from '../featured-projects/featured-projects.component';
import { MySectionComponent } from '../my-section/my-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    AboutContactComponent,
    FeaturedProjectsComponent,
    MySectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
