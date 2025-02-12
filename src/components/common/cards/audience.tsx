import React from 'react';

import { Card, Stack, Text, ThemeIcon, Title } from '@mantine/core';

import { Icon } from '@tabler/icons-react';

import classes from './audience.module.scss';

export default function Audience({
  data,
}: {
  data: { icon: Icon; title: string; desc: string };
}) {
  return (
    <Card withBorder bg={'transparent'} className={classes.card} padding={'xl'}>
      <Stack h={'100%'}>
        <ThemeIcon size={48} variant="transparent" className={classes.icon}>
          <data.icon size={48} />
        </ThemeIcon>

        <Title order={3} fz={'md'} w={{ md: '90%', lg: '100%' }}>
          {data.title}
        </Title>

        <Text fz={'sm'}>{data.desc}</Text>
      </Stack>
    </Card>
  );
}
