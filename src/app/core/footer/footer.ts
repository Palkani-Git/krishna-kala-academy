import { Component } from '@angular/core';

@Component({
  selector: 'kka-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {

 links = [

  { label: 'Home', link: '#home' },

  { label: 'About', link: '#about' },

  { label: 'Activities', link: '#activities' },

  { label: 'Events', link: '#events' },

  { label: 'Registration', link: '#registration' },

  { label: 'Contact', link: '#contact' }

];

  activities=[

    'Bharatanatyam',
    'Silambam',
    'Yoga',
    'Krishna Bhajans',
    'Classical Dance'

  ];

}
