import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Stack, Text, Title } from '@mantine/core';
import FormContact from '@/components/form/contact';

export const metadata: Metadata = { title: 'Hackathon' };

export default async function Hackathon() {
  return (
    <LayoutPage>
      <LayoutSection id="page-hackathon" margined>
        <Stack ta={'center'} gap={'xl'}>
          <Title order={2} fz={40} c={'pri'}>
            Hackathon / Innovation Stage
          </Title>
          <Text>
            This track is designed to showcase the industry&apos;s leading
            startups and provide an opportunity for Venture Capitalists (VCs) on
            industry trends. All startups that will be participating on this
            track are hand picked by Startinev and AI Conference Nairobi Team as
            the up-and-comers to be on the lookout for. These sessions of
            Hackathon (building models) and preparing presentations will be
            conducted in 48 hours and a showdown session of the finalists will
            each conduct a 10 minute pitch style format of their idea with prize
            totals of up to Kshs. 200,000.
          </Text>
        </Stack>
      </LayoutSection>

      <Divider />

      <LayoutSection id="page-hackathon-tc" margined>
        <Stack gap={'xl'}>
          <Title order={2} fz={40} c={'pri'} ta={'center'}>
            Terms & Conditions
          </Title>
          <List size="sm" spacing={'md'} ta={'start'} listStyleType="ordered">
            {tc.map((term) => (
              <ListItem key={term.label}>
                <Text component="span" inherit fw={'bold'}>
                  {term.label}
                </Text>
                : {term.value}
              </ListItem>
            ))}
          </List>
        </Stack>
      </LayoutSection>

      <LayoutSection id="page-hackathon-registration" padded>
        <Stack gap={'xl'}>
          <Title order={3} ta={'center'} fz={32} c={'pri'}>
            Hackathon Registration
          </Title>
          <Text ta={'center'} fw={500}>
            Applications will undergo review and final hackathon participants
            will be contacted.
          </Text>
          <FormContact defaultInquiry="Hackathon Registration" />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}

const tc = [
  {
    label: 'Eligibility',
    value:
      'The hackathon is open to individuals who are at least 18 years old and will be physically in Nairobi on the 26th and 27th of March 2024.',
  },
  {
    label: 'Team Formation',
    value:
      'Participants may form teams of up to 4 members. Each team must designate a team leader who will be the primary point of contact.',
  },
  {
    label: 'Registration',
    value:
      'All participants must register for the hackathon through the official registration process. Registrations made after the specified deadline will not be considered.',
  },
  {
    label: 'Original Work',
    value:
      'All projects submitted must be original work. Plagiarism or unauthorized use of third-party intellectual property is strictly prohibited.',
  },
  {
    label: 'Code of Conduct',
    value:
      'Participants are expected to conduct themselves in a professional and respectful manner throughout the hackathon. Any form of harassment or discrimination will not be tolerated and may result in immediate disqualification.',
  },
  {
    label: 'Judging Criteria',
    value:
      'Projects will be judged based on criteria such as creativity, technical complexity, innovation, and overall presentation. The decisions of the judges are final and binding.',
  },
  {
    label: 'Prizes',
    value:
      'Prizes will be awarded to the top-performing teams as determined by the judging panel. Prizes are non-transferable and may be subject to taxation in accordance with local laws.',
  },
  {
    label: 'Intellectual Property',
    value:
      'Participants retain ownership of the intellectual property rights to their projects.',
  },
  {
    label: 'Final Participation',
    value:
      'The organizers reserve the right to review the eligibility of participants and teams at any stage of the hackathon. Final participation and eligibility for prizes will be subject to review by a panel of judges.',
  },
  {
    label: 'Changes to Terms and Conditions',
    value:
      'The organizers reserve the right to make changes to these terms and conditions at any time. Participants will be notified of any changes via email or through the official hackathon website.',
  },
  {
    label: 'Governing Law',
    value:
      'These terms and conditions shall be governed by and construed in accordance with the laws of Kenya.',
  },
];
