import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import appData from './app';

export const socials = [
  {
    link: appData.socials.twitter.link,
    label: appData.socials.twitter.platform,
    icon: IconBrandX,
    image:
      'https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000',
  },
  {
    link: appData.socials.facebook.link,
    label: appData.socials.facebook.platform,
    icon: IconBrandFacebook,
    image:
      'https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000',
  },
  {
    link: appData.socials.instagram.link,
    label: appData.socials.instagram.platform,
    icon: IconBrandInstagram,
    image:
      'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000',
  },
  {
    link: appData.socials.linkedin.link,
    label: appData.socials.linkedin.platform,
    icon: IconBrandLinkedin,
    image:
      'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000',
  },
];
