import React from 'react';

import {
  Box,
  Card,
  Overlay,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

import { Icon } from '@tabler/icons-react';

import classes from './audience.module.scss';
import { ICON_STROKE_WIDTH } from '@/data/constants';

export default function Audience({
  data,
}: {
  data: { icon: Icon; title: string; desc: string; image: string };
}) {
  return (
    <Card bg={'transparent'} className={classes.card} padding={0}>
      <Box
        pos={'relative'}
        p={'xl'}
        h={'100%'}
        style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Overlay zIndex={0} backgroundOpacity={0.5} />

        <div style={{ zIndex: 1, position: 'relative' }}>
          <Stack h={'100%'}>
            <ThemeIcon size={48} variant="transparent" className={classes.icon}>
              <data.icon size={48} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>

            <Title order={3} fz={'md'} w={{ md: '90%', lg: '100%' }}>
              {data.title}
            </Title>

            <Text fz={'sm'}>{data.desc}</Text>
          </Stack>
        </div>
      </Box>
    </Card>
  );
}
