import { Component } from '@angular/core';

interface IAboutCard {
  icon: string;
  title: string;
  description: string;
}


@Component({
  selector: 'kka-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUsComponent {
   cards: IAboutCard[] = [

    {
      icon: 'bi-bank',
      title: 'Our Academy',
      description:
      'Founded in 2008 in Chennai, Krishna Kala Academy has nurtured over 2,000 students across generations. We are committed to preserving India classical art traditions in their purest form, passed down through lineages of great masters.'
    },

    {
      icon: 'bi-stars',
      title: 'Our Vision',
      description:
      'To be a beacon of classical Indian arts — a sacred space where tradition, spirituality, and excellence converge. We envision a world where every home resonates with the grace of Bharatanatyam and the devotion of Krishna Bhajans.'
    },

    {
      icon: 'bi-bullseye',
      title: 'Our Mission',
      description:
      'To provide authentic, accessible, and affordable classical arts education to all who seek it. We nurture discipline, devotion, and artistic excellence in every student, regardless of age or background. Our values are rooted in respect, dedication, and the preservation of our cultural heritage  .'
    }

  ];
}
