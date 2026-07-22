import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'Kka-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Activities', link: '#activities' },
    { label: 'Events', link: '#events' },
    { label: 'Registration', link: '#registration' },
    { label: 'Contact', link: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

}
