import React from 'react';
import { Grid, GridCol, Stack, Title } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import SpeakerListing from '@/components/common/cards/speaker/listing';
import { people } from '@/data/people';
import { exhibition } from '@/data/exhibition';
import CardSponsor from '@/components/common/cards/sponsor';
import IntroSection from '@/components/layout/intro/section';
import AccordionProgram from '@/components/common/accordions/program';
import { program } from '@/data/program';
import HeroPastYr2024 from '@/components/layout/hero/past/yr2024';
import PartialGallery from '@/components/partial/gallery';
import CardObjective from '@/components/common/cards/objective';
import CardAudience from '@/components/common/cards/audience';
import { Metadata } from 'next';
import { gallery } from '@/data/gallery';
import { content } from '@/data/content';
import { partners } from '@/data/partners';
import { sponsorship } from '@/data/sponsorship';
import CardPartner from '@/components/common/cards/partner';
import CardExhibitor from '@/components/common/cards/exhibitor';

export const metadata: Metadata = { title: '2024' };

export default function Yr2024() {
  const list = gallery.conference.concat(gallery.expo);

  return (
    <LayoutPage>
      <HeroPastYr2024 />

      <LayoutSection id="objectives" padded bordered>
        <IntroSection
          props={{
            title: 'Objectives',
            desc: 'From fostering collaboration among professionals to showcasing the latest advancements in AI, these goals were designed to drive meaningful discussions, spark innovation, and empower participants to shape the future of artificial intelligence.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center">
          {content.objectives.map((objective) => (
            <GridCol key={objective.title} span={{ base: 12, sm: 6, md: 4 }}>
              <CardObjective data={objective} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="audience" padded bordered>
        <IntroSection
          props={{
            title: 'Target Audience',
            desc: 'Our AI Conference was designed to cater to a diverse and dynamic audience, bringing together professionals, enthusiasts, and organizations from across the AI ecosystem.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center">
          {content.whoAttends.map((item) => (
            <GridCol key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
              <CardAudience data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="speakers" padded bordered>
        <IntroSection
          props={{
            title: 'Speakers',
            desc: 'These experts shared their knowledge and perspectives on AI, drone technology, and data analytics, with representation from Kenya and other global hubs of innovation.',
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
          {exhibition.exhibitors.map((exhibitor, index) => (
            <GridCol key={index} span={{ base: 6, xs: 4, md: 3 }}>
              <CardExhibitor data={exhibitor} />
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
                26<sup>th</sup> March, 2024 (Day I)
              </Title>
              <AccordionProgram data={program.schedule.day1} />
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack gap={'xl'}>
              <Title ta={'center'} order={3} fz={'xl'}>
                27<sup>th</sup> March, 2024 (Day II)
              </Title>
              <AccordionProgram data={program.schedule.day2} />
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="sponsors-partners" padded bordered>
        <IntroSection
          props={{
            title: 'Sponsors & Partners',
            desc: 'Their support enabled us to bring together top experts, showcase groundbreaking technologies, and create a platform for meaningful discussions.',
            subTitle: '2024',
          }}
          options={{ spacing: true }}
        />

        <Grid>
          {partners.map((partner, index) => (
            <GridCol key={index} span={{ base: 6, sm: 4 }}>
              <CardPartner data={partner} />
            </GridCol>
          ))}

          {sponsorship.sponsors.map((partner, index) => (
            <GridCol key={index} span={{ base: 6, sm: 4 }}>
              <CardSponsor data={partner} />
            </GridCol>
          ))}
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

        <PartialGallery props={{ list }} />
      </LayoutSection>
    </LayoutPage>
  );
}
