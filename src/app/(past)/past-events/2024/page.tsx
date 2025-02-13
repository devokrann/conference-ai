import React from 'react';
import {
  Card,
  Grid,
  GridCol,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
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
import { images } from '@/assets/images';
import ImageDefault from '@/components/common/images/default';

export const metadata: Metadata = { title: '2024' };

export default function Yr2024() {
  const list = gallery.conference.concat(gallery.expo);

  return (
    <LayoutPage>
      <HeroPastYr2024 />

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
            <GridCol key={item.title} span={{ base: 12, xs: 6, md: 4 }}>
              <CardAudience data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="objectives"
        padded
        bordered
        style={{
          backgroundImage: `url(${images.gallery.conference.yr2024.image68})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Overlay zIndex={0} backgroundOpacity={0.65} />

        <div style={{ zIndex: 1, position: 'relative' }}>
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
              <GridCol key={objective.title} span={{ base: 12, xs: 6, md: 4 }}>
                <CardObjective data={objective} />
              </GridCol>
            ))}
          </Grid>
        </div>
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

      <LayoutSection
        id="exhibitors"
        padded
        bordered
        style={{
          backgroundImage: `url(${images.gallery.expo.yr2024.image18})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Overlay zIndex={0} backgroundOpacity={0.5} />

        <div style={{ zIndex: 1, position: 'relative' }}>
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
        </div>
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
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap={'xl'}>
              <Title ta={'center'} order={3} fz={'xl'}>
                26<sup>th</sup> March, 2024 (Day I)
              </Title>
              <AccordionProgram data={program.schedule.day1} />
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap={'xl'}>
              <Title ta={'center'} order={3} fz={'xl'}>
                27<sup>th</sup> March, 2024 (Day II)
              </Title>
              <AccordionProgram data={program.schedule.day2} />
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="sponsors-partners"
        padded
        bordered
        style={{
          backgroundImage: `url(${images.gallery.conference.yr2024.image142})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Overlay zIndex={0} backgroundOpacity={0.55} />

        <div style={{ zIndex: 1, position: 'relative' }}>
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
              <GridCol key={index} span={{ base: 12, xs: 6, md: 4 }}>
                <CardPartner data={partner} />
              </GridCol>
            ))}

            {sponsorship.sponsors.map((partner, index) => (
              <GridCol key={index} span={{ base: 12, xs: 6, md: 4 }}>
                <CardSponsor data={partner} />
              </GridCol>
            ))}
          </Grid>
        </div>
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

      <LayoutSection
        id="hackathon"
        padded
        style={{
          backgroundImage: `url(${images.gallery.conference.yr2024.image140})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Overlay zIndex={0} backgroundOpacity={0.5} />

        <div style={{ zIndex: 1, position: 'relative' }}>
          <IntroSection
            props={{
              title: 'Hackathon',
              desc: 'The hackathon brought together developers, data scientists, AI enthusiasts, and innovators to collaborate on real-world challenges, build groundbreaking solutions, and push the boundaries of what AI can achieve.',
              subTitle: '2024',
            }}
            options={{ spacing: true }}
          />

          <Grid gutter={'xl'}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack>
                <Grid grow>
                  {hackathonStats.map((item, index) => (
                    <GridCol key={index} span={{ base: 6, xs: 4 }}>
                      <Card
                        bg={'var(--mantine-color-pri-6)'}
                        c={'sec.4'}
                        h={'100%'}
                      >
                        <Stack align="center" gap={0}>
                          <Text
                            ta={'center'}
                            fz={{ base: 'xl', md: 32, lg: 40 }}
                            fw={'bold'}
                          >
                            {item.stat}
                          </Text>

                          <Title
                            ta={'center'}
                            order={4}
                            fw={'bold'}
                            c={'white'}
                          >
                            {item.title}
                          </Title>
                        </Stack>
                      </Card>
                    </GridCol>
                  ))}
                </Grid>

                <Grid>
                  <GridCol span={{ base: 12, xs: 6 }}>
                    <ImageDefault
                      src={images.gallery.conference.yr2024.image141}
                      alt="hackathon image 1"
                      height={{ base: 200, sm: 180, md: 140, lg: 160 }}
                      radius={'sm'}
                    />
                  </GridCol>

                  <GridCol span={{ base: 12, xs: 6 }}>
                    <ImageDefault
                      src={images.gallery.hackathon.yr2024.image7}
                      alt="hackathon image 2"
                      height={{ base: 200, sm: 180, md: 140, lg: 160 }}
                      radius={'sm'}
                    />
                  </GridCol>
                </Grid>
              </Stack>
            </GridCol>

            <GridCol span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={3} fz={'xl'}>
                  Innovate. Collaborate. Build the Future of AI
                </Title>

                <Text>
                  The AI-themed Hackathon generated considerable excitement,
                  drawing participants from diverse backgrounds with a shared
                  passion for innovation. It received an impressive 189 entries,
                  each presenting creative and forward-thinking solutions at the
                  intersection of technology and real-world challenges.
                </Text>

                <Text>
                  After a rigorous selection process, 20 individuals were chosen
                  to advance to the final stage. Organized into five dynamic
                  teams, these participants collaborated intensively, leveraging
                  their technical skills, creativity, and problem-solving
                  abilities to develop prototypes within a limited timeframe.
                </Text>
              </Stack>
            </GridCol>
          </Grid>
        </div>
      </LayoutSection>
    </LayoutPage>
  );
}

const hackathonStats = [
  {
    title: 'Prize Pool',
    stat: '200K',
  },
  {
    title: 'Applicants',
    stat: '189',
  },
  {
    title: 'Finalists',
    stat: '20',
  },
];
