'use client';

import React from 'react';

import { Grid, GridCol, Group, Pagination, Stack, Title } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import SpeakerListing from '@/components/common/cards/speaker/listing';
import { people } from '@/data/people';
import { exhibition } from '@/data/exhibition';
import CardSponsor from '@/components/common/cards/sponsor';
import IntroSection from '@/components/layout/intro/section';
import AccordionProgram from '@/components/common/accordions/program';
import { program } from '@/data/program';
import ModalImage from '@/components/common/modals/image';
import { gallery } from '@/data/gallery';
import { usePaginate } from '@/hooks/paginate';
// import { Metadata } from 'next';

// export const metadata: Metadata = { title: '2024' };

export default function Yr2024() {
  const list = gallery.conference.concat(gallery.expo);
  const divisor = 12;
  const { items, totalPages, activePage, setActivePage } = usePaginate(
    list,
    divisor
  );

  return (
    <LayoutPage>
      <LayoutSection id="page-speakers" padded bordered>
        <IntroSection
          props={{
            title: 'Speakers',
            desc: 'Each speaker brought unique insights, groundbreaking ideas, and real-world applications of AI, making this event a hub for learning and inspiration.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center">
          {people.map((person) => (
            <GridCol
              key={person.name}
              span={{ base: 12, xs: 6, sm: 4, md: 3, lg: 2 }}
            >
              <SpeakerListing data={person} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="exhibitors" padded bordered>
        <IntroSection
          props={{
            title: 'Exhibitors',
            desc: 'From startups to industry leaders, these organizations brought their expertise and creativity to our conference, offering attendees a firsthand look at the latest advancements in AI.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid>
          {exhibition.exhibitors.map((exhibitor) => (
            <GridCol span={{ base: 6, xs: 4, md: 3 }} key={exhibitor.name}>
              <CardSponsor data={exhibitor} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="program" padded bordered>
        <IntroSection
          props={{
            title: 'Program',
            desc: 'Featuring keynote speeches, panel discussions, workshops, and networking sessions, the program was designed to foster learning, collaboration, and innovation.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack gap={'xl'}>
              <Title ta={'center'} order={3} fz={'xl'}>
                26<sup>th</sup> March (Day I)
              </Title>
              <AccordionProgram data={program.schedule.day1} />
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack gap={'xl'}>
              <Title ta={'center'} order={3} fz={'xl'}>
                27<sup>th</sup> March (Day II)
              </Title>
              <AccordionProgram data={program.schedule.day2} />
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="gallery" padded>
        <IntroSection
          props={{
            title: 'Gallery',
            desc: 'Explore the gallery to relive the excitement, see the vibrant community in action, and get a glimpse of what made our conference a must-attend event for AI enthusiasts and professionals alike.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center" gutter={'xs'}>
          {items.map((item) => (
            <GridCol key={item.image} span={{ base: 12, xs: 4, md: 3 }}>
              <ModalImage image={item.image} />
            </GridCol>
          ))}
        </Grid>

        <Group justify="center" mt={'xl'}>
          <Pagination
            size={'sm'}
            value={activePage}
            onChange={setActivePage}
            total={totalPages}
          />
        </Group>
      </LayoutSection>
    </LayoutPage>
  );
}
