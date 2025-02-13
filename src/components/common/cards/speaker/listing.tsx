import React from 'react';
import { Center, Stack, Text } from '@mantine/core';
import classes from './listing.module.scss';
import ImageDefault from '../../images/default';
import ModalSpeaker from '../../modals/speaker';

export default function Listing({ data }: { data: any }) {
  return (
    <Stack className={classes.card}>
      <Center>
        <ModalSpeaker props={{ speaker: data }}>
          <div className={classes.imageContainer}>
            <ImageDefault
              src={data.image}
              alt={data.name}
              height={{ base: 160 }}
              width={{ base: 160 }}
              className={classes.image}
            />
          </div>
        </ModalSpeaker>
      </Center>

      <Stack gap={0} align="center" ta={'center'} fw={500}>
        <ModalSpeaker props={{ speaker: data }}>
          <Text className={classes.title}>{data.name}</Text>

          <Text inherit fz={'xs'}>
            {data.occupation.position}
          </Text>

          {data.occupation.pow && (
            <Text inherit fz={'xs'}>
              {data.occupation.pow}
            </Text>
          )}
        </ModalSpeaker>
      </Stack>
    </Stack>
  );
}
