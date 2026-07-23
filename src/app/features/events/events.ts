import { Component } from '@angular/core';

interface IEventCard {
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

interface IGalleryImage {
  image: string;
  title: string;
}

@Component({
  selector: 'kka-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class EventsComponent {

  selectedTab: 'upcoming' | 'gallery' | 'past' = 'upcoming';

  changeTab(tab: 'upcoming' | 'gallery' | 'past') {

    this.selectedTab = tab;

  }

  // upcomingEvents: IEventCard[] = [

  //   {

  //     image: 'assets/images/bharatham-1.png',

  //     title: 'Independence Day Cultural Celebration',

  //     description:
  //       'A grand showcase of Bharatanatyam, Silambam and folk performances by our students.',

  //     date: 'Aug 15, 2026',

  //     time: '6:00 PM',

  //     location: 'Narada Gana Sabha, Chennai'

  //   },

  //   {

  //     image: 'assets/images/bharatham-2.png',

  //     title: 'Janmashtami Bhajan Sandhya',

  //     description:
  //       'An evening of Krishna Bhajans and devotional music celebrating Lord Krishna.',

  //     date: 'Sep 7, 2026',

  //     time: '7:30 PM',

  //     location: 'Sri Krishna Educational Academy & Visakha\'s Fine Arts Auditorium'

  //   },

  //   {

  //     image: 'assets/images/pajanai-image.png',

  //     title: 'Navaratri Arangetram 2026',

  //     description:
  //       'Special Bharatanatyam Arangetram by advanced students with live orchestra.',

  //     date: 'Oct 3, 2026',

  //     time: '5:30 PM',

  //     location: 'Museum Theatre, Chennai'

  //   }

  // ];


  upcomingEvents: IEventCard[] = [

  {

    image: 'assets/images/day-1.png',

    title: 'Sri Krishna Janmashtami Mahotsavam',

    description:
      'Join us for the 24th Year Sri Krishna Janmashtami Mahotsavam with the sacred Milk Pot Procession Festival and devotional celebrations.',

    date: 'Sep 4, 2026',

    time: '5:00 PM',

    location: 'Hare Krishna Temple, Avadi, Chennai'

  },

  {

    image: 'assets/images/day-2.png',

    title: 'Sri Sri Gaura Nitai Alankaram & Garuda Vahana Procession',

    description:
      'Witness the divine alankaram of Sri Sri Gaura Nitai and the grand Garuda Vahana Procession with devotional bhajans and spiritual celebrations.',

    date: 'Sep 5, 2026',

    time: '5:00 PM',

    location: 'Hare Krishna Temple, Avadi, Chennai'

  },

  {

    image: 'assets/images/janmashtami-poster.png',

    title: 'Sri Krishna Janmashtami 2026 Celebrations',

    description:
      'Celebrate the auspicious Sri Krishna Janmashtami with cultural performances, devotional music, temple procession and special darshan for devotees.',

    date: 'Sep 27, 2026',

    time: 'From 5:00 PM',

    location: 'Hare Krishna Temple, Avadi, Chennai'

  }

];

  galleryImages: IGalleryImage[] = [

    {
      image: 'assets/images/bhara-image.png',
      title: 'Annual Day'
    },

    {
      image: 'assets/images/bharatham-1.png',
      title: 'Yoga Camp'
    },

    {
      image: 'assets/images/bharatham-2.png',
      title: 'Silambam'
    },

    {
      image: 'assets/images/dance-image.png',
      title: 'Bhajans'
    },

    {
      image: 'assets/images/pajanai-image.png',
      title: 'Dance Festival'
    },

    {
      image: 'assets/images/silambam-image.png',
      title: 'Temple Visit'
    }

  ];

  pastEvents: IEventCard[] = [

    {

      image: 'assets/images/yoga-image.png',

      title: 'Krishna Jayanthi 2025',

      description:
        'Students performed devotional dance and music before hundreds of devotees.',

      date: 'Aug 26, 2025',

      time: '6:00 PM',

      location: 'Mylapore, Chennai'

    },

    {

      image: 'assets/images/pajanai-image.png',

      title: 'Annual Cultural Festival',

      description:
        'A colourful celebration of Indian classical arts by all academy students.',

      date: 'Jan 18, 2025',

      time: '5:00 PM',

      location: 'Chennai'

    }

  ];
}
