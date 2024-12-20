import React from 'react';

import { Card, Center } from '@mantine/core';
import ImageDefault from '../images/default';

export default function Sponsor({
  data,
}: {
  data: { image: string; name: string; width: string; bg?: string };
}) {
  return (
    <Card bg={data.bg ? data.bg : 'var(--mantine-color-gray-light)'}>
      <Center mih={120}>
        <ImageDefault
          src={data.image}
          alt={data.name}
          height={{ base: 64 }}
          width={{ base: data.width }}
          fit="contain"
        />
      </Center>
    </Card>
  );
}
