import React from 'react';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';

import { typeParams } from './layout';
import {
  Anchor,
  Box,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { people } from '@/data/people';
import { linkify } from '@repo/utils/formatters';
import ImageDefault from '@/components/common/images/default';
import { socials } from '@/data/social';

export default function Post({ params }: typeParams) {
  const personDetails = people.find(
    (p) => linkify(p.name) == params.speakerName
  );

  return (
    <LayoutPage>
      <LayoutSection id="page-speaker" margined>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, sm: 6, md: 4 }}>
            <Card>
              <Stack>
                <CardSection>
                  <ImageDefault
                    src={
                      personDetails?.poster
                        ? personDetails?.poster
                        : personDetails?.image || ''
                    }
                    alt={personDetails?.name}
                    height={{ base: 380 }}
                    width={{ base: '100%' }}
                    fit="contain"
                    radius={'sm'}
                  />
                </CardSection>

                {personDetails?.contact && (
                  <Stack my={'md'}>
                    {personDetails?.contact.email && (
                      <Group justify="center">
                        <Anchor
                          href={`mailto:${personDetails?.contact.email}`}
                          inherit
                          // className={classes.link}
                        >
                          {personDetails?.contact.email}
                        </Anchor>
                      </Group>
                    )}

                    {personDetails?.contact.socials && (
                      <Group justify="center">
                        {personDetails?.contact.socials.map((social) => (
                          <Anchor
                            key={social.link}
                            inherit
                            href={social.link}
                            target="_blank"
                          >
                            <Image
                              src={
                                socials.find(
                                  (socials) =>
                                    socials.label.toLowerCase() == social.label
                                )?.image
                              }
                              w={32}
                              h={32}
                              alt={social.label}
                            />
                          </Anchor>
                        ))}
                      </Group>
                    )}
                  </Stack>
                )}
              </Stack>
            </Card>
          </GridCol>

          <GridCol
            span={{ base: 12, sm: 6, md: 8 }}
            ta={{ base: 'center', xs: 'start' }}
            pl={{ md: 'md' }}
          >
            <Stack gap={'xl'}>
              <Stack gap={0}>
                <Grid align="end">
                  <GridCol span={{ base: 12, xs: 6, sm: 12, md: 9 }}>
                    <Title order={2} fz={40} c={'pri'}>
                      {personDetails?.name}
                    </Title>
                    <Text fw={'bold'}>
                      {personDetails?.occupation.position}
                      {personDetails?.occupation.pow &&
                        `, ${personDetails?.occupation.pow}`}
                    </Text>
                  </GridCol>
                  {personDetails?.occupation.image && (
                    <GridCol span={{ base: 12, xs: 6, sm: 12, md: 3 }}>
                      <Group justify="end">
                        <Box
                          px={8}
                          py={4}
                          bg={'white'}
                          miw={'60%'}
                          style={{
                            borderRadius: 'var(--mantine-radius-sm)',
                            overflow: 'hidden',
                          }}
                        >
                          <ImageDefault
                            src={personDetails?.occupation.image}
                            alt={personDetails?.occupation.pow}
                            height={{ base: 48 }}
                            width={{ base: '100%' }}
                            fit="contain"
                          />
                        </Box>
                      </Group>
                    </GridCol>
                  )}
                </Grid>
              </Stack>

              <Divider />

              <Stack gap={'xs'}>
                {personDetails?.bio?.map((item) => (
                  <Text key={item} fz={'sm'}>
                    {item}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
