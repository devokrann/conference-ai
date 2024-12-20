'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Stack, Title } from '@mantine/core';
import BreadcrumbsMain from '@/components/common/breadcrumbs/main';
import { crumbify } from '@repo/utils/formatters';
import LayoutSection from '../section';
import classes from './route.module.scss';
import { SECTION_SPACING } from '@/data/constants';

export default function Route({ title }: { title?: string }) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  return (
    <LayoutSection
      id="layout-hero"
      padded={SECTION_SPACING * 1.5}
      className={classes.hero}
    >
      <Stack align="center">
        <Title order={1} ta={'center'}>
          {title ? title : segments[segments.length - 1].label}
        </Title>

        <BreadcrumbsMain props={segments} />
      </Stack>
    </LayoutSection>
  );
}
