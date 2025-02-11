import React from 'react';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import LayoutBody from '@/components/layout/body';
import HeroHome from '@/components/layout/hero/home';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import HeaderMain from '@/components/layout/headers/main';
import {
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CardObjective from '@/components/common/cards/objective';
import CardWhy from '@/components/common/cards/why';
import CardAudience from '@/components/common/cards/audience';
// import CardSponsor from '@/components/common/cards/sponsor';
// import { sponsorship } from '@/data/sponsorship';
import { images } from '@/assets/images';
import { content } from '@/data/content';
// import { partners } from '@/data/partners';
import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';

export default function Home() {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
      hero={<HeroHome />}
    >
      <main>
        <LayoutPage>
          <LayoutSection id="page-home" padded>
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'} align="center">
                <Title order={2} fz={40} c={'sec'}>
                  Explore The Fusion of AI, Drones, and Data Analytics
                </Title>

                <Text w={{ md: '75%' }}>
                  The AI conference in Nairobi is a cutting-edge event that
                  brings together thought leaders, innovators, and enthusiasts
                  in Artificial Intelligence, Drone Technology, and Data
                  Analytics.
                </Text>
              </Stack>

              <Group justify="center" gap={48}>
                <Button
                  leftSection={'1'}
                  component="a"
                  href="#page-home-objectives"
                >
                  Objectives
                </Button>
                <Button leftSection={'2'} component="a" href="#page-home-who">
                  Who Attends
                </Button>
                <Button leftSection={'3'} component="a" href="#page-home-why">
                  Why Attend
                </Button>
              </Group>
            </Stack>
          </LayoutSection>

          <LayoutSection id="page-home-objectives" padded>
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'}>
                <Title order={2} fz={40} c={'pri'}>
                  Objectives
                </Title>
                <Text>
                  The event aims to explore the synergies between these rapidly
                  evolving technologies, fostering collaboration, and inspiring
                  the next wave of breakthroughs.
                </Text>
              </Stack>
              <Grid justify="center">
                {content.objectives.map((objective) => (
                  <GridCol
                    key={objective.title}
                    span={{ base: 12, sm: 6, md: 4 }}
                  >
                    <CardObjective data={objective} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          <LayoutSection id="page-home-who" padded>
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'}>
                <Title order={2} fz={40} c={'pri'}>
                  Who Attends?
                </Title>
                <Text>
                  The event aims to explore the synergies between these rapidly
                  evolving technologies, fostering collaboration, and inspiring
                  the next wave of breakthroughs.
                </Text>
              </Stack>
              <Grid justify="center">
                {content.whoAttends.map((item) => (
                  <GridCol key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
                    <CardAudience data={item} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          <LayoutSection id="page-home-why" padded>
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'}>
                <Title order={2} fz={40} c={'pri'}>
                  Why Attend?
                </Title>
                <Text>
                  The AI conference in Nairobi is a cutting-edge conference that
                  will bring together thought leaders, innovators, and
                  enthusiasts in the fields of Artificial Intelligence, Drone
                  Technology, and Data Analytics. The event aims to explore the
                  synergies between these rapidly evolving technologies,
                  fostering collaboration, and inspiring the next wave of
                  breakthroughs.
                </Text>
              </Stack>
              <Grid justify="center">
                {content.whyAttend.map((item) => (
                  <GridCol key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
                    <CardWhy data={item} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          {/* <LayoutSection id="page-home-partners">
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'}>
                <Title order={2} fz={40} c={'pri'}>
                  Partners
                </Title>
                <Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text>
              </Stack>
              <Grid>
                {partners.map((partner) => (
                  <GridCol span={{ base: 6, sm: 3 }} key={partner.name}>
                    <CardSponsor data={partner} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection> */}

          {/* <LayoutSection id="page-home-sponsors" padded>
            <Stack gap={48}>
              <Stack ta={'center'} gap={'xl'}>
                <Title order={2} fz={40} c={'pri'}>
                  Sponsors
                </Title>
                <Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text>
              </Stack>
              <Grid>
                {sponsorship.sponsors.map((sponsor) => (
                  <GridCol span={{ base: 6, sm: 3 }} key={sponsor.name}>
                    <CardSponsor data={sponsor} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection> */}

          <LayoutSection id="page-home-drone-space" padded>
            <Stack gap={'xs'}>
              {/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Powered By{" "}
								<Text component="span" inherit c={"sec.6"}>
									Drone Space!
								</Text>
							</Title>
							<Text></Text>
						</Stack> */}
              <Grid justify="center">
                <GridCol span={{ base: 12 }} mx={'auto'}>
                  <Grid gutter={'xl'}>
                    <GridCol span={{ base: 12 }} mx={'auto'}>
                      <Divider label={'powered by'} w={'50%'} mx={'auto'} />
                    </GridCol>
                    <GridCol span={{ base: 8, xs: 5, sm: 4 }} mx={'auto'}>
                      {/* <Card.Partner
											data={{
												image: droneSpaceImage,
												title: "Drone Space",
											}}
											noPadding
										/> */}
                      <Image
                        src={images.brand.droneSpace.logo.landscape.white}
                        alt="Drone Space"
                      />
                    </GridCol>
                  </Grid>
                </GridCol>
              </Grid>
            </Stack>
          </LayoutSection>
        </LayoutPage>
      </main>

      <AffixTop />
      <AffixNavbar />
    </LayoutBody>
  );
}
