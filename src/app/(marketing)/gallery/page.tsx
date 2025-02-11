import React from 'react';
import { Metadata } from 'next';
import { Grid, GridCol, Stack } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { shuffleArray } from '@/utilities/helpers/array';
import ModalImage from '@/components/common/modals/image';
import { gallery } from '@/data/gallery';

export const metadata: Metadata = { title: 'Gallery' };

export default async function Gallery() {
  return (
    <LayoutPage>
      <LayoutSection id="page-gallery" containerized={false}>
        <Stack gap={48} p={'xs'}>
          <Grid justify="center" gutter={'xs'}>
            {shuffleArray(gallery.conference.concat(gallery.expo)).map(
              (item) => (
                <GridCol key={item.image} span={{ base: 12, xs: 4, md: 3 }}>
                  <ModalImage image={item.image} />
                </GridCol>
              )
            )}
          </Grid>
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
