'use client';

import React from 'react';

import Link from 'next/link';

import {
  Group,
  Button,
  Divider,
  Anchor,
  Grid,
  GridCol,
  Center,
} from '@mantine/core';

import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import MenuAvatar from '@/components/common/menus/avatar';
import MenuNavbar from '@/components/common/menus/navbar';
import DrawerUser from '@/components/common/drawers/user';
import { SignIn as FragmentSignIn } from '@/components/common/fragments/auth';

import classes from './main.module.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { AUTH_URLS, ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/hooks/redux';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import { typeMenu } from '@/types/components/menu';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean };
}) {
  const pathname = usePathname();

  const matchesPath = (link: string) => {
    return pathname == link || (link != '/' && pathname.includes(link));
  };

  const navLinks = (links.navbar as typeMenu[]).map((link) => (
    <MenuNavbar key={link.link} subLinks={link.subLinks}>
      {!link.subLinks ? (
        <Anchor
          component={Link}
          href={link.link}
          className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
            matchesPath(link.link) ? classes.linkActive : ''
          }`}
        >
          {link.label}
        </Anchor>
      ) : (
        <Anchor
          component={Link}
          href={link.link}
          className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
            matchesPath(link.link) ? classes.linkActive : ''
          }`}
          onClick={(e) => e.preventDefault()}
        >
          <Group gap={4}>
            <span>{link.label}</span>
            <IconChevronDown
              size={ICON_SIZE}
              stroke={ICON_STROKE_WIDTH}
              style={{ marginTop: 2 }}
            />
          </Group>
        </Anchor>
      )}
    </MenuNavbar>
  ));

  const imageBrand = (
    <Anchor component={Link} href={'/'}>
      <ImageDefault
        src={images.brand.conference.ai.logo.landscape}
        alt={appData.name.app}
        height={{ base: 56 }}
        width={{ base: 160 }}
        fit="contain"
      />
    </Anchor>
  );

  return (
    <LayoutSection
      id={'partial-navbar-main'}
      shadowed={!options?.absolute}
      pos={options?.absolute ? 'absolute' : undefined}
      left={options?.absolute ? 0 : undefined}
      top={options?.absolute ? 0 : undefined}
      right={options?.absolute ? 0 : undefined}
      style={{ zIndex: 1 }}
    >
      <Grid align="center" gutter={0}>
        <GridCol span={{ base: 3 }} visibleFrom="md">
          <Group>{imageBrand}</Group>
        </GridCol>

        <GridCol span={{ base: 9 }} hiddenFrom="md">
          <Group my={'xs'}>{imageBrand}</Group>
        </GridCol>

        <GridCol span={{ base: 3 }} hiddenFrom="md">
          <Group justify="end">
            <DrawerNavbarMain
              props={links.navbar}
              options={{ absolute: options?.absolute }}
            />
          </Group>
        </GridCol>

        <GridCol span={{ base: 9 }} visibleFrom="md">
          <Group component={'nav'} justify="end">
            {navLinks}
          </Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

const links = {
  navbar: [
    { link: '/', label: 'Overview' },
    { link: '/exhibit', label: 'Exhibit' },
    { link: '/program', label: 'Program' },
    { link: '/speakers', label: 'Speakers' },
    { link: '/sponsors', label: 'Sponsorship' },
    { link: '/gallery', label: 'Gallery' },
  ],
};
