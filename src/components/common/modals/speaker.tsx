'use client';

import { Speaker as TypeSpeaker } from '@/types/people';
import {
  ActionIcon,
  Anchor,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import ImageDefault from '../images/default';
import { socials } from '@/data/social';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconX } from '@tabler/icons-react';

export default function Speaker({
  props,
  children,
}: {
  props: { speaker: TypeSpeaker };
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={'95%'}
        centered
      >
        <Grid>
          <GridCol span={{ base: 12, sm: 6, md: 4 }}>
            <Card>
              <Stack>
                <CardSection pos={'relative'}>
                  <ImageDefault
                    src={
                      props.speaker.poster
                        ? props.speaker.poster
                        : props.speaker.image || ''
                    }
                    alt={props.speaker.name}
                    height={{ base: 320 }}
                    width={{ base: '100%' }}
                    radius={'sm'}
                  />

                  {props.speaker.occupation.image && (
                    <div
                      style={{
                        position: 'absolute',
                        zIndex: 1,
                        left: 'var(--mantine-spacing-xs)',
                        bottom: 'var(--mantine-spacing-xs)',
                        padding: '4px 8px',
                        minWidth: '40%',
                        backgroundColor: 'var(--mantine-color-white)',
                        borderRadius: 'var(--mantine-radius-sm)',
                        overflow: 'hidden',
                      }}
                    >
                      <ImageDefault
                        src={props.speaker.occupation.image}
                        alt={props.speaker.occupation.pow}
                        height={{ base: 48 }}
                        width={{ base: '100%' }}
                        fit="contain"
                      />
                    </div>
                  )}
                </CardSection>

                {props.speaker.contact && (
                  <Stack>
                    {props.speaker.contact.email && (
                      <Group justify="center">
                        <Anchor
                          href={`mailto:${props.speaker.contact.email}`}
                          inherit
                          fz={'sm'}
                          // className={classes.link}
                        >
                          {props.speaker.contact.email}
                        </Anchor>
                      </Group>
                    )}

                    {props.speaker.contact.socials && (
                      <Group justify="center">
                        {props.speaker.contact.socials.map((social) => (
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
                                    socials.label.toLowerCase() ==
                                    social.label.toLowerCase()
                                )?.image
                              }
                              w={24}
                              h={24}
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
            <Stack gap={'xs'}>
              <Stack gap={0}>
                <Grid gutter={0}>
                  <GridCol span={{ base: 12, xs: 6, sm: 12, md: 9 }}>
                    <Title order={2} fz={'xl'} c={'pri'}>
                      {props.speaker.name}
                    </Title>

                    <Text fw={'bold'}>
                      {props.speaker.occupation.position}
                      {props.speaker.occupation.pow &&
                        `, ${props.speaker.occupation.pow}`}
                    </Text>
                  </GridCol>

                  <GridCol span={{ base: 12, xs: 6, sm: 12, md: 3 }}>
                    <Group justify="end">
                      <ActionIcon
                        size={ICON_WRAPPER_SIZE}
                        color="gray"
                        variant="subtle"
                        onClick={close}
                      >
                        <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                      </ActionIcon>
                    </Group>
                  </GridCol>
                </Grid>
              </Stack>

              <Divider />

              <Stack gap={'xs'}>
                {props.speaker.bio?.map(
                  (item) =>
                    props.speaker.bio.indexOf(item) < 2 && (
                      <Text key={item} fz={'sm'}>
                        {item}
                      </Text>
                    )
                )}
              </Stack>
            </Stack>
          </GridCol>
        </Grid>
      </Modal>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}
