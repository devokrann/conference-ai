'use client';

import { Grid, GridCol, Group, Pagination } from '@mantine/core';
import React, { useEffect } from 'react';
import ModalImage from '../common/modals/image';
import { usePaginate } from '@/hooks/paginate';
import { useRouter } from 'next/navigation';

export default function Gallery({ props }: { props: { list: any[] } }) {
  const router = useRouter();

  const divisor = 12;
  const { items, totalPages, activePage, setActivePage } = usePaginate(
    props.list,
    divisor
  );

  useEffect(() => {
    if (activePage > 1) {
      router.push('#gallery');
    }
  }, [activePage]);

  return (
    <>
      <Grid justify="center" gutter={'xs'}>
        {items.map((item) => (
          <GridCol
            key={item.image}
            span={{ base: 12, xs: 6, sm: 4, md: 3, xl: 2 }}
          >
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
