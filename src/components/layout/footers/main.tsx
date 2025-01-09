import React from 'react';

import Link from 'next/link';

import {
  Flex,
  Grid,
  Text,
  Title,
  List,
  Anchor,
  Divider,
  Group,
  GridCol,
  ListItem,
  Stack,
} from '@mantine/core';

import LayoutSection from '@/components/layout/section';

import { images } from '@/assets/images';

import classes from './main.module.scss';
import appData from '@/data/app';
import { socials } from '@/data/social';
import {
  ICON_SIZE,
  // ICON_STROKE_WIDTH,
  // ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
// import SegmentedControlTheme from '@/components/common/segmented-control/theme';
// import { IconCircleFilled } from '@tabler/icons-react';
// import FormNewsletter from '@/components/form/newsletter';
import ImageDefault from '@/components/common/images/default';

export default function Main() {
  return (
    <LayoutSection id={'partial-footer-main'} padded className={classes.footer}>
      <Stack gap={SECTION_SPACING}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 5 }}>
            <Flex
              align={{ base: 'center', md: 'start' }}
              direction={'column'}
              justify={{ base: 'center', md: 'start' }}
              gap={'xl'}
            >
              <Anchor component={Link} href={'/'}>
                <ImageDefault
                  src={images.brand.conference.ai.logo.landscape}
                  alt={appData.name.app}
                  height={{ base: 64 }}
                  width={{ base: 176 }}
                  fit="contain"
                />
              </Anchor>

              <Text ta={{ base: 'center', md: 'start' }}>
                The AI conference in Nairobi is a cutting-edge conference that
                will bring together thought leaders, innovators, and enthusiasts
                in the fields of Artificial Intelligence, Drone Technology, and
                Data Analytics. The event aims to explore the synergies between
                these rapidly evolving technologies, fostering collaboration,
                and inspiring the next wave of breakthroughs.
              </Text>

              {socialLinks}
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }}>
            <Grid gutter={{ base: 'xl', md: 'md' }} justify="end">
              {linkSets.map((linkSet) => (
                <GridCol key={linkSet.title} span={{ base: 12, xs: 6, md: 5 }}>
                  <Flex
                    direction={'column'}
                    align={{ base: 'center', md: 'start' }}
                    gap={'xl'}
                  >
                    <Title order={4} fw={'bold'} fz={24} c={'pri.6'}>
                      {linkSet.title}
                    </Title>

                    <List listStyleType="none" spacing={'md'}>
                      {linkSet.links.map((link) => (
                        <ListItem key={link.link} className={classes.listItem}>
                          <Anchor
                            component={Link}
                            href={link.link}
                            title={link.label}
                            className={classes.link}
                          >
                            {link.label}
                          </Anchor>
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>

        {/* <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'center', sm: 'end' }}
          justify={{ sm: 'space-between' }}
          gap={'lg'}
        >
          <Flex
            direction={'column'}
            align={{ base: 'center', sm: 'start' }}
            gap={'lg'}
          >
            <Stack gap={'xs'}>
              <Title order={3} fz={'lg'} ta={{ base: 'center', sm: 'start' }}>
                Subscribe to our newsletter
              </Title>
              <Text c={'dimmed'} ta={{ base: 'center', sm: 'start' }}>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </Text>
            </Stack>

            <FormNewsletter />
          </Flex>

          {socialLinks}
        </Flex> */}
      </Stack>

      <Divider
        mt={SECTION_SPACING}
        mb={SECTION_SPACING / 2}
        color="var(--mantine-color-default-border)"
      />

      <Stack gap={'lg'} fz={'sm'} ta={{ base: 'center', md: 'start' }} lh={1}>
        <Flex
          align={'center'}
          justify={{
            // sm: 'space-between'
            sm: 'center',
          }}
          direction={{ base: 'column', sm: 'row' }}
          gap={'md'}
        >
          <Text component="span" inherit>
            © {new Date().getFullYear()}{' '}
            <Text component="span" inherit fw={'bold'} c={'sec.6'}>
              {appData.name.app}
            </Text>
            . All Rights Reserved.
          </Text>

          {/* <Group gap={'xs'}>
            <Anchor inherit href="#tc" className={classes.link}>
              Terms and Conditions
            </Anchor>

            <IconCircleFilled size={4} />

            <Anchor inherit href="#pp" className={classes.link}>
              Privacy Policy
            </Anchor>
          </Group> */}
        </Flex>

        {/* <Flex justify={{ base: 'center', sm: 'start' }}>
          <SegmentedControlTheme />
        </Flex> */}
      </Stack>
    </LayoutSection>
  );
}

const linkSets = [
  {
    title: 'Useful Links',
    links: [
      { label: 'Sponsorship Opportunities', link: '/sponsors' },
      { label: 'Exhibiting & Booths', link: '/exhibit' },
      { label: 'Event Overview', link: '/' },
      { label: 'Event Program', link: '/program' },
      { label: 'Speakers', link: '/speakers' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {
        label: appData.locations.main.location,
        link: appData.locations.main.pin,
      },
      { label: appData.emails.info, link: `mailto:${appData.emails.info}` },
      { label: appData.phones.main, link: `tel:${appData.phones.main}` },
    ],
  },
];

const socialLinks = (
  <Group gap={8}>
    {socials.map((social) => (
      <Anchor
        key={social.link}
        title={social.label}
        href={social.link}
        w={ICON_SIZE + 12}
        h={ICON_SIZE + 12}
      >
        <ImageDefault
          src={social.image}
          alt={social.label}
          height={{ base: ICON_SIZE + 12 }}
          width={{ Base: ICON_SIZE + 12 }}
        />
      </Anchor>
    ))}
  </Group>
);
