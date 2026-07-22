import { Component } from '@angular/core';

@Component({
  selector: 'kka-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {

  links=[

    'Home',
    'About',
    'Activities',
    'Events',
    'Registration',
    'Contact'

  ];

  activities=[

    'Bharatanatyam',
    'Silambam',
    'Yoga',
    'Krishna Bhajans',
    'Classical Dance'

  ];

}
