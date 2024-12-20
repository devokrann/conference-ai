import { people } from './people';

const selectSpeaker = (name: string) =>
  people.find((person) => person.name == name);

export const program = {
  schedule: {
    day1: [
      {
        title: {
          duration: '08.00 AM – 09.00 AM',
          heading: 'Registration',
        },
        desc: {
          agenda: 'Registration',
        },
      },
      {
        title: {
          duration: '09.00 AM – 09.50 AM',
          heading: 'Welcome & Opening Keynote',
        },
        desc: {
          agenda: 'Official opening of the expo.',
          participants: [
            selectSpeaker('Tony Mwangi'),
            selectSpeaker('Charles Murito'),
            selectSpeaker('Hillary Wangila'),
          ],
          moderators: [
            selectSpeaker('Laban Cliff'),
            // selectSpeaker("Faith Maina"),
          ],
        },
      },
      {
        title: {
          duration: '09.50 AM – 10.30 AM',
          heading: 'Panel Discussion',
        },
        desc: {
          agenda: 'How will AI transform the Future (Man vs AI)?',
          platform: 'ai',
          participants: [
            selectSpeaker('Bethany Jepchumba'),
            selectSpeaker('Dennis Mwighusa'),
            selectSpeaker('Joan Mbesya'),
            selectSpeaker('Antony Wachira'),
            selectSpeaker('Kamau Maina'),
            selectSpeaker('Alfred Ongere'),
          ],
          moderators: [selectSpeaker('Zee Gitahi')],
        },
      },
      {
        title: {
          duration: '10.30 AM – 11.00 AM',
          heading: 'Wellness Break',
        },
        desc: {
          agenda: 'Wellness Break',
        },
      },
      {
        title: { duration: '11.00 AM – 11.30 AM', heading: 'Panel Discussion' },
        desc: {
          agenda: 'Drone regulation and policy',
          platform: 'drones',
          participants: [
            // selectSpeaker("Lynette Shalwa"),
            // selectSpeaker("Tony Mwangi"),
            selectSpeaker('Douglas Okwemba'),
            selectSpeaker('Craig Cleave'),
            selectSpeaker('Sharon Omoja'),
          ],
          moderators: [selectSpeaker('Robert Yawe')],
        },
      },
      {
        title: { duration: '11.30 AM – 11.50 AM', heading: 'Speaker Session' },
        desc: {
          agenda: 'Masterclass on Leveraging on AI Lawfully.',
          platform: 'ai',
          speaker: selectSpeaker('Nathan-Ross Adams'),
        },
      },
      {
        title: { duration: '11.50 AM – 12.30 PM', heading: 'Panel Discussion' },
        desc: {
          agenda: 'Policy data protection and regulation.',
          platform: 'drones',
          participants: [
            selectSpeaker('Nathan-Ross Adams'),
            selectSpeaker('Michael Zimba'),
            selectSpeaker('Pamela Adede'),
            selectSpeaker('Sharon Holi'),
          ],
          moderators: [selectSpeaker('George Ogada')],
        },
      },
      {
        title: { duration: '12.30 PM – 12.50 PM', heading: 'Plenary Session' },
        desc: {
          agenda: 'Drones for early detection of pests and diseases.',
          platform: 'drones',
          speaker: selectSpeaker('Violet Ochieng'),
        },
      },
      {
        title: { duration: '12.50 PM – 01.50 PM', heading: 'Lunch Break' },
        desc: {
          agenda: 'Lunch Break',
        },
      },
      {
        title: { duration: '01.50 PM – 02.10 PM', heading: 'Plenary Session' },
        desc: {
          agenda:
            'Exploring Country-Specific Foundational Models and Potential Use Cases',
          platform: 'ai',
          speaker: selectSpeaker('Martin Mirero'),
        },
      },
      {
        title: { duration: '02.10 PM – 02.50 PM', heading: 'Panel Session' },
        desc: {
          agenda:
            'Drone deployment in agriculture and the challenges in crop spraying and data collection.',
          platform: 'drones',
          participants: [
            selectSpeaker('Robert Blair'),
            selectSpeaker('Hawkins Musili'),
            selectSpeaker('Tawanda Chihambakwe'),
          ],
          moderators: [selectSpeaker('Geoffrey Nyaga')],
        },
      },
      {
        title: { duration: '02.50 PM – 03.30 PM', heading: 'Panel Discussion' },
        desc: {
          agenda:
            'How can organizations successfully navigate the era of AI powered automation?',
          platform: 'ai',
          participants: [
            selectSpeaker('Tolga Ors'),
            selectSpeaker('Mutembei Kariuki'),
            selectSpeaker('Benaiah Wepundi'),
            selectSpeaker('Joel Onditi'),
            selectSpeaker('Magdaline Chepkemoi'),
          ],
          moderators: [selectSpeaker('Laban Cliff')],
        },
      },
      {
        title: { duration: '03.30 PM – 03.50 PM', heading: 'Plenary Session' },
        desc: {
          agenda: 'The future of Work. Don’t give human a Robot.',
          platform: 'ai',
          speaker: selectSpeaker('Moses Kemibaro'),
        },
      },
      {
        title: { duration: '03.50 PM – 04.30 PM', heading: 'Panel Session' },
        desc: {
          agenda:
            'Chatbots for Change: Using Conversational AI to transform rural communities in Kenya?',
          platform: 'ai',
          participants: [
            selectSpeaker('Betsy Mutiithi'),
            selectSpeaker('Bryan Koyundi'),
            selectSpeaker('Brian Omwenga'),
            selectSpeaker('Emman Atwa'),
            // selectSpeaker("Elias Omondi"),
            // selectSpeaker("George Matuthu"),
          ],
          moderators: [selectSpeaker('Moses Kemibaro')],
        },
      },
      {
        title: {
          duration: '04.30 PM – 04.50 PM',
          heading: 'Wellness Break',
        },
        desc: {
          agenda: 'Wellness Break',
        },
      },
      {
        title: { duration: '04.50 PM – 05:20 PM', heading: 'Panel Session' },
        desc: {
          agenda: 'Drones in Filming',
          platform: 'drones',
          participants: [
            selectSpeaker('Mwangi Kirubi'),
            selectSpeaker('Tosh Gitonga'),
            selectSpeaker('Ezekiel Onyango'),
            selectSpeaker('Craig Cleave'),
          ],
          moderators: [selectSpeaker('Maqboo Mohammed')],
        },
      },
    ],
    day2: [
      {
        title: { duration: '08:00 AM – 09.00 AM', heading: 'Registration' },
        desc: {
          agenda: 'Registration.',
        },
      },
      {
        title: { duration: '09.00 AM – 09.30 AM', heading: 'Panel Session' },
        desc: {
          agenda: 'Exploring data centres in the context of AI',
          platform: 'ai',
          participants: [
            selectSpeaker('Jimmy Masinde'),
            selectSpeaker('Washington Ogol'),
            selectSpeaker('George Matuthu'),
          ],
          moderators: [selectSpeaker('Riyaz Bachani')],
        },
      },
      {
        title: { duration: '09.30 AM – 10.00 AM', heading: 'Panel Session' },
        desc: {
          agenda: 'Aerial LIDAR using Drones',
          platform: 'drones',
          participants: [
            selectSpeaker('Fred Wekesa'),
            selectSpeaker('Denis Mumo'),
            selectSpeaker('Fred Awiti'),
            selectSpeaker('Solomon Kariuki'),
          ],
          moderators: [selectSpeaker('Martin Kariithi')],
        },
      },
      {
        title: { duration: '10.00 AM – 10.30 AM', heading: 'Panel Session' },
        desc: {
          agenda: 'The future with generative AI.',
          platform: 'ai',
          participants: [
            selectSpeaker('Mwangi Kirubi'),
            selectSpeaker('Nathan-Ross Adams'),
            selectSpeaker('Michael Michie'),
            selectSpeaker('Moses Kemibaro'),
            selectSpeaker('Edna Karijo'),
          ],
          moderators: [selectSpeaker('Brian Omwenga')],
        },
      },
      {
        title: { duration: '10.30 AM – 10.45 AM', heading: 'Plenary Session' },
        desc: {
          agenda: 'AI in advanced nuclear reactor design and operations.',
          platform: 'ai',
          speaker: selectSpeaker('Francis Omondi'),
        },
      },
      {
        title: { duration: '10:45 AM – 11.00 AM', heading: 'Wellness Break' },
        desc: {
          agenda: 'Wellness break.',
        },
      },
      {
        title: { duration: '11.00 AM – 10.30 AM', heading: 'Plenary Session' },
        desc: {
          agenda: 'A data monetization framework for AI.',
          platform: 'ai',
          speaker: selectSpeaker('Sahil Patel'),
        },
      },
      {
        title: { duration: '11.30 AM – 12:10 PM', heading: 'Panel Session' },
        desc: {
          agenda:
            'How can AI features empower financial institutions stay competitive and provide better services?',
          platform: 'ai',
          participants: [
            selectSpeaker('Edward Ndichu'),
            selectSpeaker('Jason Masai'),
            selectSpeaker('Mercy Mau'),
            // selectSpeaker("Sandeep Main"),
          ],
          moderators: [selectSpeaker('Dean Gichukie')],
        },
      },
      {
        title: { duration: '12:10 PM – 12.40 PM', heading: 'Plenary Session' },
        desc: {
          agenda:
            'Leveraging AI to monitor, address and prevent fraud (Cyber Security).',
          platform: 'ai',
          speaker: selectSpeaker('Bright Gameli'),
        },
      },
      {
        title: { duration: '12.40 PM – 01.00 PM', heading: 'Plenary Session' },
        desc: {
          agenda:
            'What are the distinctions between ChatGPT and Microsoft Copilot, and what advantages does Azure AI offer in comparison?',
          platform: 'ai',
          speaker: selectSpeaker('Bethany Jepchumba'),
        },
      },
      {
        title: { duration: '01.00 PM – 02.00 PM', heading: 'Lunch Break' },
        desc: {
          agenda: 'Lunch Break',
        },
      },
      {
        title: { duration: '02:00 PM – 02.50 PM', heading: 'Panel Session' },
        desc: {
          agenda:
            'Women in AI and Drone Tech - Are we making progress and inspiring others to grow their career prospects?',
          platform: 'ai',
          participants: [
            selectSpeaker('Loise Mwangi'),
            selectSpeaker('Priscah Kinyanjui'),
            selectSpeaker('Lyela Mutisya'),
            selectSpeaker('Winnie Njeri'),
          ],
          moderators: [selectSpeaker('Mercy Makau')],
        },
      },
      {
        title: {
          duration: '02.50 PM – 03.50 PM',
          heading: 'Hackathon Session',
        },
        desc: {
          agenda:
            "This track is designed to showcase the industry's leading startups and provide an opportunity for Venture Capitalists (VCs) on industry trends. All startups (5 Teams) that will be participating on this track are hand picked by Startinev and AI Conference Nairobi Team as the up-and-comers to be on the lookout for. These sessions of Hackathon (building models) and preparing presentations will be conducted in 48 hours and a showdown session of the finalists will each conduct a 10 minute pitch style format of their idea with prize totals of up to Kshs. 200,000.",
          participants: [
            selectSpeaker('Mary Ndinda'),
            selectSpeaker('Sandeep Main'),
            selectSpeaker('Mbakaya Weever'),
          ],
          moderators: [selectSpeaker('Laban Cliff')],
        },
      },
      {
        title: {
          duration: '03.50 PM – 04.00 PM',
          heading: 'Wellness Break',
        },
        desc: {
          agenda: 'Wellness break',
        },
      },
      {
        title: {
          duration: '04.00 PM – 04.40 PM',
          heading: 'Hackathon Winner Announcement',
        },
        desc: {
          agenda: 'Announcement of hackathon winner.',
        },
      },
      {
        title: { duration: '04.40 PM – 05.00 PM', heading: 'Vote of Thanks' },
        desc: {
          agenda: 'Official closing of the expo.',
        },
      },
    ],
  },
};
