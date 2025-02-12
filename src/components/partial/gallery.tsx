'use client';

import { Grid, GridCol, Group, Pagination } from '@mantine/core';
import React from 'react';
import ModalImage from '../common/modals/image';
import { usePaginate } from '@/hooks/paginate';

export default function Gallery({ props }: { props: { list: any[] } }) {
  const divisor = 12;
  const { items, totalPages, activePage, setActivePage } = usePaginate(
    props.list,
    divisor
  );

  return (
    <>
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
    </>
  );
}
