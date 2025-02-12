import React from 'react';
import LayoutSection from '../../section';
import classes from './yr2024.module.scss';
import { SECTION_SPACING } from '@/data/constants';
import {
  Card,
  CardSection,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';

export default function Yr2024() {
  return (
    <LayoutSection
      id="layout-hero"
      padded={SECTION_SPACING * 1.5}
      className={classes.hero}
      containerized={false}
    >
      <Stack align="center" gap={SECTION_SPACING / 1.5}>
        <Container size={'sm'}>
          <Stack align="center" gap={SECTION_SPACING / 1.5}>
            <Text inherit fz={{ base: 'xs', xs: 'sm' }} ta={'center'}>
              The inaugural AI Conference Nairobi, held on March 26th and 27th,
              2024, at the Sarit Expo Centre (Loita Hall) in Nairobi, Kenya, was
              a pivotal event in Kenya&apos;s technology landscape.
            </Text>

            <ImageDefault
              src={images.brand.conference.logo.landscape.light}
              alt={'AI Conference'}
              height={{ base: 60, sm: 90, md: 120 }}
              width={{ base: 205, sm: 310, md: 410 }}
            />
            <Stack gap={0} fw={'bold'} ta={'center'}>
              <Text inherit c={'sec.6'} fz={{ base: 'xl', md: 24 }}>
                Exploring the Fusion of AI, Drone Tech, and Data Analytics
              </Text>

              <Text inherit fz={{ base: 'lg', xs: 24, md: 32 }}>
                Sarit Expo Centre, Loita Hall
              </Text>
            </Stack>

            <Text inherit fz={{ base: 'xs', xs: 'sm' }} ta={'center'}>
              The conference convened a diverse cross-section of stakeholders to
              explore the cutting-edge applications and future implications of
              these converging technologies.
            </Text>
          </Stack>
        </Container>

        <Container size={'md'}>
          <Grid gutter={'lg'} justify="center">
            {stats.map((stat, index) => (
              <GridCol key={index} span={{ md: 2 }}>
                <Card
                  bg={'var(--mantine-color-pri-light)'}
                  padding={'xs'}
                  miw={140}
                  h={'100%'}
                  shadow="xs"
                  style={{
                    border: '1.5px solid var(--mantine-color-sec-4)',
                  }}
                >
                  <Stack gap={'xs'} ta={'center'}>
                    <Group justify="center">
                      <Title order={3} fz={'md'} fw={500} c={'white'} w={'90%'}>
                        {stat.title}
                      </Title>
                    </Group>

                    <CardSection bg={'var(--mantine-color-sec-4)'} p={'xs'}>
                      <Text inherit fz={'xl'} fw={'bold'} c={'pri.8'}>
                        {stat.stat}
                      </Text>
                    </CardSection>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Stack>
    </LayoutSection>
  );
}

const stats = [
  {
    title: 'Event Attendants',
    stat: '600+',
  },
  {
    title: 'Ticket Purchases',
    stat: '500+',
  },
  {
    title: 'Event Speakers',
    stat: '50+',
  },
  {
    title: 'Hackathon Participants',
    stat: '20',
  },
  {
    title: 'Exhibitor Booths',
    stat: '13',
  },
  {
    title: 'Countries Represented',
    stat: '8',
  },
  // {
  //   title: 'Partners & Sponsors',
  //   stat: '6',
  // },
];
