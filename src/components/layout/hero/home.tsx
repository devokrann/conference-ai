import React from 'react';
import LayoutSection from '../section';
import classes from './home.module.scss';
import { SECTION_SPACING } from '@/data/constants';
import { Stack, Text } from '@mantine/core';
import appData from '@/data/app';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';

export default function Home() {
  return (
    <LayoutSection
      id="layout-hero"
      padded={SECTION_SPACING * 1.5}
      className={classes.hero}
    >
      <Stack align="center" gap={SECTION_SPACING / 1.5}>
        <ImageDefault
          src={images.brand.conference.logo.landscape.light}
          alt={'AI Conference'}
          height={{ base: 60, sm: 90, md: 120 }}
          width={{ base: 205, sm: 310, md: 410 }}
        />

        <Stack gap={'xs'} align="center" ta={'center'} fw={'bold'} lh={1.2}>
          <Text inherit c={'sec.6'} fz={{ base: 'xl', md: 24 }}>
            Explore the Fusion of AI, Drones, and Data Analytics
          </Text>
          <Text inherit fz={{ base: 'lg', xs: 24, md: 32 }}>
            {appData.locations.main.location}
          </Text>
          <Text inherit fz={{ base: 'lg', xs: 24, md: 32 }}>
            Tue 6th - Wed 7th May, 2025
          </Text>
          <Text inherit fw={'normal'} fz={{ base: 'sm', xs: 'md', md: 'lg' }}>
            {appData.phones.main} | {appData.emails.info}
          </Text>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
