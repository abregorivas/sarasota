import React from 'react';
import Email from '@material-ui/icons/Email';
import Place from '@material-ui/icons/Place';
import bibleStudy from '../assets/images/visit/bibleStudy.jpg';
import bibleReading from '../assets/images/visit/bibleReading.jpeg';
import peopleGathered from '../assets/images/visit/peopleGathered.jpg';

const visitApi = [
  {
    title: 'Church Service',
    venue: 'St. Wilfreds Church',
    time: 'Sunday 1:30pm',
    addr1: '3773 Wilkinson Rd',
    addr2: 'Sarasota, FL 34233',
    imgSrc: peopleGathered,
    icon: <Place />,
    href: null,
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3545.6756559534037!2d-82.4961104!3d27.2920354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c341231d123a0f%3A0xa0f2c3ff52d67277!2s3773+Wilkinson+Rd%2C+Sarasota%2C+FL+34233!5e0!3m2!1sen!2sus!4v1522223872516'
  },
  {
    title: 'Bible Study',
    venue: "Zindlers' Home",
    time: 'Thursday 7:00pm',
    addr1: '4335 Olive Avenue',
    addr2: 'Sarasota, FL 34231',
    imgSrc: bibleStudy,
    icon: <Place />,
    href: null,
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.6565623594392!2d-82.50882738494694!3d27.292633382965477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3411adc3fdae9%3A0xd3a7ffbe47bc1119!2s4335+Olive+Ave%2C+Sarasota%2C+FL+34231!5e0!3m2!1sen!2sus!4v1522280282818'
  },
  {
    title: 'One on One',
    venue: 'Spiritual Guidance',
    time: 'Set an appointment',
    addr1: 'Come visit us',
    addr2: 'Send us an Email',
    imgSrc: bibleReading,
    icon: <Email />,
    href: '#contact',
    mapUrl: null
  }
];

export default  visitApi