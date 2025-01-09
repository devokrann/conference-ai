import React from 'react';

import { Anchor, Group, Text } from '@mantine/core';

import LayoutSection from '@/components/layout/section';

import classes from './main.module.scss';
import { socials } from '@/data/social';
import { ICON_SIZE } from '@/data/constants';
import appData from '@/data/app';
import ImageDefault from '@/components/common/images/default';

export default function Main() {
  return (
    <LayoutSection
      id="partial-header-main"
      padded="xs"
      className={classes.header}
      visibleFrom="xs"
    >
      <Group justify="space-between" fw={'bold'} fz={'sm'}>
        <Group gap={'xs'}>
          <Text inherit>6th - 7th May, 2025</Text> |{' '}
          <Text inherit>{appData.locations.main.location}</Text>
        </Group>

        <Group gap={4}>
          {socials.map((social) => (
            <Anchor
              key={social.link}
              title={social.label}
              href={social.link}
              w={ICON_SIZE + 8}
              h={ICON_SIZE + 8}
            >
              <ImageDefault
                src={social.image}
                alt={social.label}
                height={{ base: ICON_SIZE + 8 }}
                width={{ Base: ICON_SIZE + 8 }}
              />
            </Anchor>
          ))}
        </Group>
      </Group>
    </LayoutSection>
  );
}
