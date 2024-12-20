import React from 'react';

import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import CardBooth from '@/components/common/cards/booth';
import { exhibition } from '@/data/exhibition';

export const metadata: Metadata = { title: 'Booths' };

export default async function Booths() {
  return (
    <LayoutPage>
      <LayoutSection id="page-registration" margined>
        <Stack ta={'center'} gap={'xl'}>
          <Title order={2} fz={40} c={'pri'}>
            Book Your Space
          </Title>
          <Text>
            Additional tickets to the quantity listed in each package will have
            to be purchased separately; i.e. Additional participants will have
            to purchase a ticket.
          </Text>
        </Stack>
      </LayoutSection>

      <LayoutSection id="page-registration-cards" margined>
        <Grid justify="center">
          {exhibition.booths.map((booth, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6 }}>
              <CardBooth data={booth} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
