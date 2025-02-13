import React from 'react';

import { Card, Group, Stack, Text, Title } from '@mantine/core';
import ImageDefault from '../images/default';

export default function Partner({
  data,
}: {
  data: { image: string; title: string; desc: string; width?: string };
  noPadding?: boolean;
}) {
  return (
    <Card
      bg={'transparent'}
      padding={'lg'}
      h={'100%'}
      shadow="xs"
      style={{ border: '2px inset var(--mantine-color-pri-6)' }}
    >
      <Stack>
        <Group mih={80}>
          <ImageDefault
            src={data.image}
            alt={data.title}
            height={{ base: 64 }}
            width={{ base: data.width ? data.width : '100%' }}
            fit="contain"
          />
        </Group>

        <Title order={3} fz={'lg'} c={'sec.4'}>
          {data.title}
        </Title>

        <Text>{data.desc}</Text>
      </Stack>
    </Card>
  );
}
