import React from 'react';
import LayoutSection from '../section';
import classes from './home.module.scss';
import { SECTION_SPACING } from '@/data/constants';
import { Divider, Stack, Text, Title } from '@mantine/core';
import appData from '@/data/app';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';

export default function Home() {
  return (
    <LayoutSection
      id="layout-hero"
      padded={SECTION_SPACING * 1.5}
      className={classes.hero}
      containerized={'sm'}
    >
      <Stack align="center" gap={SECTION_SPACING / 1.5}>
        <ImageDefault
          src={images.brand.conference.logo.landscape.light}
          alt={'AI Conference'}
          height={{ base: 60, sm: 90, md: 120 }}
          width={{ base: 205, sm: 310, md: 410 }}
        />

        <Text inherit fz={{ base: 'xs', xs: 'sm' }} ta={'center'}>
          Following the success of the 2024 AI Conference Nairobi, which
          attracted over 900 attendees, Drone Space is excited to announce that
          it will host the 2nd AI Conference Nairobi
          {/* on May 6th and 7th, 2025. */}
        </Text>

        <Stack gap={'xs'} align="center" ta={'center'} lh={1.2}>
          <Text inherit c={'sec.6'} fz={{ base: 'xl', md: 24 }} fw={'bold'}>
            Explore the Fusion of AI, Drones, and Data Analytics
          </Text>
          <Text inherit fz={{ base: 'lg', xs: 24, md: 32 }} fw={'bold'}>
            {appData.locations.main.location}
          </Text>
          {/* <Text inherit fz={{ base: 'lg', xs: 24, md: 32 }}>
            Tue 6th - Wed 7th May, 2025
          </Text> */}

          <Stack>
            <Title order={2} fz={'xl'} c={'sec'} ta={'center'}>
              Upcoming Event: 2nd AI Conference Nairobi 2025
            </Title>

            <Text inherit fz={{ base: 'xs', xs: 'sm', sm: 'md' }} ta={'center'}>
              We are excited to announce that we will be hosting the 2nd AI
              Conference Nairobi 2025 at JW Marriott, Westlands. While the
              official date is yet to be confirmed, preparations are underway
              for an insightful and engaging event.
            </Text>
          </Stack>

          <Divider color="white" w={'100%'} my={'xs'} />

          <Text inherit fw={'normal'} fz={{ base: 'sm' }}>
            {appData.phones.main} | {appData.emails.info}
          </Text>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
