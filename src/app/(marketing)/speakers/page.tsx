import React from 'react';

import { Grid, GridCol } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import SpeakerListing from '@/components/common/cards/speaker/listing';
import { people } from '@/data/people';

export default function Blog() {
  return (
    <LayoutPage>
      <LayoutSection id="page-speakers" margined>
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
    </LayoutPage>
  );
}
