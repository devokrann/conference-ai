'use client';

import React from 'react';

import { ActionIcon, Affix, AffixBaseProps } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';
import ImageDefault from '../images/default';

import WrapperTransition from '@/components/wrapper/transition';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconChevronUp } from '@tabler/icons-react';

export default function WhatsApp({
  position = {
    bottom: 'calc(var(--mantine-spacing-xl) * 2)',
    right: 0,
  },
  ...restProps
}: { position?: AffixBaseProps['position'] } & Omit<
  AffixBaseProps,
  'position' | 'children'
>) {
  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <Affix position={position} {...restProps}>
      <WrapperTransition
        transition={'slide-left'}
        mounted={scroll.y > 0 && !pinned}
      >
        <ActionIcon
          size={ICON_WRAPPER_SIZE + 4}
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          component="a"
          href="https://wa.me/254712656565"
          target="_blank"
          bg={'green'}
        >
          <ImageDefault
            src={
              'https://img.icons8.com/?size=100&id=16713&format=png&color=000000'
            }
            alt={'Whats App'}
            height={{ base: ICON_SIZE + 4 }}
            width={{ base: ICON_SIZE + 4 }}
            mode="default"
          />
        </ActionIcon>
      </WrapperTransition>
    </Affix>
  );
}
