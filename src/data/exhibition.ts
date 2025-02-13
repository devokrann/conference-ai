import { images } from '@/assets/images';

const additional = '(Additional participants have to purchase ticket)';

export const exhibition = {
  booths: [
    // {
    // 	title: "Startup I",
    // 	price: "15,000",
    // 	desc: {
    // 		list: [
    // 			`2 x Regular Tickets ${additional}`,
    // 			"1 x 0.24M Fascia with Exhibitor name",
    // 			"2 x Spotlight",
    // 			"1 x Round/Rectangular table",
    // 			"1 x 13-amp power point",
    // 			"2 x venue chairs",
    // 		],
    // 		dimentions: "3M by 2M",
    // 	},
    // 	sold: true,
    // },
    {
      title: 'Startup II',
      price: '25,000',
      desc: {
        list: [
          `2 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '2 x Spotlight',
          '1 x Round/Rectangular table',
          '1 x 13-amp power point',
          '2 x venue chairs',
        ],
        dimentions: '3M by 2M',
      },
      sold: true,
    },
    {
      title: 'University',
      price: '40,000',
      desc: {
        list: [
          `2 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '2 x Spotlight',
          '1 x Round/Rectangular table',
          '1 x 13-amp power point',
          '2 x venue chairs',
        ],
        dimentions: '3M by 3M',
      },
      sold: true,
    },
    {
      title: 'University',
      price: '55,000',
      desc: {
        list: [
          `3 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '3 x Spotlight',
          '2 x Round/Rectangular table',
          '1 x 13-amp power point',
          '3 x venue chairs',
          '1 x Dustbin',
        ],
        dimentions: '6M by 3M',
      },
      sold: true,
    },
    {
      title: 'SME',
      price: '55,000',
      desc: {
        list: [
          `2 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '2 x Spotlight',
          '1 x Round/Rectangular table',
          '1 x 13-amp power point',
          '2 x venue chairs',
        ],
        dimentions: '3M by 3M',
      },
      sold: true,
    },
    {
      title: 'SME',
      price: '70,000',
      desc: {
        list: [
          `3 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '3 x Spotlight',
          '2 x Round/Rectangular table',
          '1 x 13-amp power point',
          '3 x venue chairs',
          '1 x Dustbin',
        ],
        dimentions: '6M by 3M',
      },
      sold: true,
    },
    {
      title: 'Corporate',
      price: '200,000',
      desc: {
        list: [
          `3 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '2 x Spotlight',
          '1 x Round/Rectangular table',
          '1 x 13-amp power point',
          '2 x venue chairs',
        ],
        dimentions: '3M by 3M',
      },
      sold: true,
    },
    {
      title: 'Corporate',
      price: '250,000',
      desc: {
        list: [
          `5 x Regular Tickets ${additional}`,
          '1 x 0.24M Fascia with Exhibitor name',
          '3 x Spotlight',
          '2 x Round/Rectangular table',
          '1 x 13-amp power point',
          '3 x venue chairs',
          '1 x Dustbin',
        ],
        dimentions: '6M by 3M',
      },
      sold: true,
    },
  ],

  exhibitors: [
    {
      title: 'Vaal Real Estate',
      image: images.companies.vaal,
      width: '100%',
    },
    {
      title: 'Black Rhino',
      image: images.companies.blackRhino,
      width: '60%',
    },
    // {
    // 	title: "Chatsasa",
    // 	image: images.companies.aiStartup,
    // 	width: "100%",
    // },
    {
      title: 'Koena Technology',
      image: images.companies.koena,
      width: '60%',
    },
    {
      title: 'Geo Cart',
      image: images.companies.geocart,
      width: '60%',
    },
    {
      title: 'Linkarp',
      image: images.companies.linkarp,
      width: '50%',
      bg: 'white',
    },
    {
      title: 'Vambo AI',
      image: images.companies.vamboAi,
      width: '70%',
      bg: 'white',
    },
    {
      title: 'Statsspeak',
      image: images.companies.statsspeak,
      width: '90%',
      bg: 'white',
    },
    {
      title: 'Think',
      image: images.companies.think,
      width: '60%',
      bg: 'white',
    },
    {
      title: 'Kendrone',
      image: images.companies.kendrone,
      width: '60%',
    },
    {
      title: 'Fahari Aviation',
      image: images.partners.media.image11,
      width: '60%',
    },
    {
      title: 'Safaricom',
      image: images.companies.safaricom,
      width: '70%',
    },
    {
      title: 'Drone Space Kenya',
      image: images.brand.droneSpace.logo.potrait.white,
      width: '70%',
    },
  ],
};
