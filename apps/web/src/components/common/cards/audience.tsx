import React from 'react';

import { Stack, ThemeIcon, Title } from '@mantine/core';

import { Icon } from '@tabler/icons-react';

import classes from './audience.module.scss';

export default function Audience({
  data,
}: {
  data: { icon: Icon; title: string };
}) {
  return (
    <Stack className={classes.card} gap={'xl'}>
      <Stack gap={'xl'} align="center">
        <ThemeIcon size={48} variant="transparent" className={classes.icon}>
          <data.icon size={48} />
        </ThemeIcon>
        <Title order={3} fz={'xl'} ta={'center'}>
          {data.title}
        </Title>
      </Stack>
    </Stack>
  );
}
