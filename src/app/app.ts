import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutUsComponent } from './features/about-us/about-us';
import { FooterComponent } from './core/footer/footer';
import { ContactUsComponent } from './core/contact-us/contact-us';
import { ActivitiesComponent } from './features/activities/activities';
import { EventsComponent } from './features/events/events';
import { RegistrationComponent } from './features/registration/registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, EventsComponent, AboutUsComponent, FooterComponent, ContactUsComponent, ActivitiesComponent, RegistrationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('krishna-kala-academy');
}
