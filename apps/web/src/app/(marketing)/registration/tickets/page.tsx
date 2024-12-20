import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import {
  Anchor,
  Divider,
  Grid,
  GridCol,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CardPartner from '@/components/common/cards/partner';
import CardTicket from '@/components/common/cards/ticket';
import { tickets } from '@/data/tickets';
import { images } from '@/assets/images';

export const metadata: Metadata = { title: 'Tickets' };

export default async function Tickets() {
  return (
    <LayoutPage>
      <LayoutSection id="page-registration" margined>
        <Stack align="center" ta={'center'} gap={'xl'}>
          <Title order={2} fz={40} c={'pri'}>
            Get Your Tickets
          </Title>
          <Text>
            All pass types provide access to the conference & exhibition hall.
          </Text>

          <Divider
            label="tickets provided by"
            c={'sec'}
            w={{ base: '100%', xs: '66%' }}
          />

          <Anchor target="_blank">
            <CardPartner
              data={{
                image: images.partners.media.image6,
                title: 'Ticketyetu',
                width: '50%',
              }}
            />
          </Anchor>
        </Stack>
      </LayoutSection>

      <LayoutSection id="page-registration-cards" margined>
        <Grid justify="center">
          {tickets.map((ticket) => (
            <GridCol key={ticket.title} span={{ base: 12, sm: 6 }}>
              <CardTicket data={ticket} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
