import React from 'react';

import { Group, Image } from '@mantine/core';

import classes from './exhibitor.module.scss';

export default function Exhibitor({
  data,
}: {
  data: { image: string; name: string; width: string; bg?: string };
}) {
  return (
    <Group
      justify="center"
      mih={200}
      className={classes.card}
      bg={data.bg && data.bg}
    >
      <Image
        src={data.image}
        alt={data.name}
        w={data.width}
        className={classes.image}
      />
    </Group>
  );
}
