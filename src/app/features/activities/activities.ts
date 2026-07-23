import { Component } from '@angular/core';

interface IActivity {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'kka-activities',
  imports: [],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class ActivitiesComponent {

  activities: IActivity[] = [

    {

      title: 'Bharatanatyam',

      image: 'assets/images/bhara-image.png',

      description:
      "One of India's oldest classical dance forms, originating in Tamil Nadu's ancient temples. Students learn authentic Adavus, Abhinaya and Margam under experienced teachers.",

      buttonText: 'Learn More'

    },

    {

      title: 'Silambam',

      image: 'assets/images/silambam-image.png',

      description:
      "Traditional Tamil martial art that develops agility, confidence, discipline and self-defence skills through structured training.",

      buttonText: 'Learn More'

    },

    {

      title: 'Yoga',

      image: 'assets/images/yoga-image.png',

      description:
      "Classical Yoga sessions focusing on physical wellbeing, breathing techniques, meditation and holistic development for every age group.",

      buttonText: 'Learn More'

    },

    {

      title: 'Krishna Bhajans',

      image: 'assets/images/pajanai-image.png',

      description:
      "Learn devotional songs dedicated to Lord Krishna through traditional bhajans and Carnatic-based musical practices.",

      buttonText: 'Learn More'

    },

   {

  title: 'Vocal & Instruments',

  image: 'assets/images/vocal-instruments.png',

  description:
  "Learn Carnatic Vocal and master classical instruments including Veena, Keyboard, Guitar, Tabla and Drums under expert guidance. Develop melody, rhythm, confidence and stage performance skills in a traditional learning environment.",

  buttonText: 'Learn More'

}

  ];

}
