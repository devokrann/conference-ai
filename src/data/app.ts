import sample from './sample';

const companyName = 'AI Conference';
const appName = companyName;
const companyOneLiner = sample.text.sentence;
const companyDescription = sample.text.prose;

export const phones = {
  main: '(254) 712 656-565',
};

export const emails = {
  info: process.env.NEXT_PUBLIC_EMAIL_INFO,
  noreply: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
};

export const socials = {
  twitter: {
    platform: `X`,
    link: 'https://x.com/aiconference_ke?t=vH9rLLLgruVtU64zJy34vA&s=09',
  },
  facebook: {
    platform: `Facebook`,
    link: 'https://www.facebook.com/profile.php?id=61555858636752&mibextid=ZbWKwL',
  },
  instagram: {
    platform: `Instagram`,
    link: 'https://www.instagram.com/aiconference_ke?igsh=cjRheXZzdDc1N2Fw',
  },
  linkedin: {
    platform: `LinkedIn`,
    link: 'https://www.linkedin.com/showcase/aiconference-nairobi/?viewAsMember=true',
  },
};

export const hours = {
  days: 'Mon - Fri',
  times: '8 AM - 5 PM',
};

export const locations = {
  main: {
    location: 'JW Marriott Hotel, Westlands',
    pin: 'https://maps.app.goo.gl/gxZAtQpLaAkazFdC9',
  },
};

const appData = {
  companyOneLiner,
  companyDescription,

  name: { company: companyName, app: appName },
  phones,
  emails,
  socials,
  hours,
  locations,
};

export default appData;
