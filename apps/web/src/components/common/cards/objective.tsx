import React from 'react';

import { Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';

import { Icon } from '@tabler/icons-react';

import classes from './objective.module.scss';

export default function Objective({
  data,
}: {
  data: { icon: Icon; title: string; desc: string };
}) {
  return (
    <Stack className={classes.card} gap={'xl'}>
      <Stack gap={'xl'}>
        <Group gap={'xs'} justify="space-between">
          <Title order={3} fz={24} ta={'center'} c={'pri'}>
            {data.title}
          </Title>
          <ThemeIcon variant="transparent" size={48} className={classes.icon}>
            <data.icon size={48} />
          </ThemeIcon>
        </Group>
        <Text ta={{ base: 'center', md: 'start' }}>{data.desc}</Text>
      </Stack>
    </Stack>
  );
}
