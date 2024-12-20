import React from 'react';

import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import CardSponsorship from '@/components/common/cards/sponsorship';
import { sponsorship } from '@/data/sponsorship';
import CardSponsor from '@/components/common/cards/sponsor';

export const metadata: Metadata = { title: 'Sponsors' };

export default async function Sponsors() {
  return (
    <LayoutPage>
      {/* <LayoutSection padded id="sponsors">
        <Stack gap={48}>
          <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Sponsors
							</Title>
							<Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text>
						</Stack>
          <Grid>
            {sponsorship.sponsors.map((sponsor) => (
              <GridCol span={{ base: 6, xs: 6, md: 3 }} key={sponsor.name}>
                <CardSponsor data={sponsor} />
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </LayoutSection> */}

      {/* <LayoutSection  padded id="partners">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Our Media Partners
							</Title>
							<Text></Text>
						</Stack>
						<Grid justify="center">
							<GridCol span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<GridCol span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.media.image3,
												title: "Radio Africa Events",
												width: "60%",
											}}
										/>
									</GridCol>
								</Grid>
							</GridCol>
							{data.partners.map(item => (
								<GridCol key={item.title} span={{ base: 12, xs: 6, sm: 4 }}>
									<Card.Partner data={item} />
								</GridCol>
							))}
							<GridCol span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<GridCol span={{ base: 12 }} mx={"auto"}>
										<Divider label={"powered by"} w={"50%"} mx={"auto"} />
									</GridCol>
									<GridCol span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.other.partner1,
												title: "Drone Space",
											}}
											noPadding
										/>
									</GridCol>
								</Grid>
							</GridCol>
						</Grid>
						<Text ta={"center"} fz={"xl"} tt={"uppercase"}>
							Powered by{" "}
							<Text component="span" inherit fw={"bold"} c={"sec.6"}>
								Drone Space!
							</Text>
						</Text>
					</Stack>
				</LayoutSection> */}

      {/* <LayoutSection  margined padded id="exhibitors">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Our Sponsors
							</Title>
						</Stack>
						<Grid>
							{sponsorship.sponsors.map(sponsor => (
								<GridCol span={{ base: 12, xs: 6, md: 3 }} key={sponsor.name}>
									<Component.Image.Sponsor data={sponsor} />
								</GridCol>
							))}
						</Grid>
					</Stack>
				</LayoutSection> */}

      <LayoutSection id="page-sponsors-opportunities" margined>
        <Stack gap={48}>
          <Stack ta={'center'} gap={'xl'}>
            <Title order={2} fz={40} c={'pri'}>
              Sponsorship Opportunities
            </Title>
            <Text>
              Select a sponsorship package from our list and become one of our
              proud affiliates.
            </Text>
          </Stack>
          <Grid justify="center" gutter={'xl'}>
            {sponsorship.packages.map((item) => (
              <GridCol span={{ base: 12, sm: 6 }} key={item.title}>
                <CardSponsorship data={item} />
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
