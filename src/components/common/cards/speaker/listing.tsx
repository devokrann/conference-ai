import React from 'react';
import Link from 'next/link';
import { Anchor, Center, Stack, Text } from '@mantine/core';
// import { Speaker } from '@/types/people';
import classes from './listing.module.scss';
import { linkify } from '@/utilities/formatters/string';
import ImageDefault from '../../images/default';

export default function Listing({ data }: { data: any }) {
  return (
    <Stack className={classes.card}>
      <Center>
        <Anchor
          className={classes.imageContainer}
          component={Link}
          href={data.bio ? `/speakers/${linkify(data.name)}` : `#`}
        >
          <ImageDefault
            src={data.image}
            alt={data.name}
            height={{ base: 160 }}
            width={{ base: 160 }}
            className={classes.image}
          />
        </Anchor>
      </Center>

      <Stack gap={0} align="center" ta={'center'} fw={500}>
        <Text className={classes.title}>{data.name}</Text>
        <Text inherit fz={'xs'}>
          {data.occupation.position}
        </Text>
        {data.occupation.pow && (
          <Text inherit fz={'xs'}>
            {data.occupation.pow}
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
