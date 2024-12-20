import React from 'react';
import Link from 'next/link';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
} from '@mantine/core';

// import { Speaker } from '@/types/people';
import { linkify } from '@repo/utils/formatters';
import CardSpeakerAgenda from '../cards/speaker/agenda';
import clases from './program.module.scss';

// interface ProgramProps {
//   title: {
//     duration: string;
//     heading: string;
//   };
//   desc: {
//     agenda: string;
//     platform?: string;
//     questions?: string[];
//     participants?: Speaker[];
//     moderators?: Speaker[];
//     speaker?: Speaker | undefined;
//   };
// }

export default function Program({ data }: { data: any[] }) {
  const items = data.map((item) => (
    <AccordionItem key={item.title.duration} value={item.title.duration}>
      <AccordionControl>
        <Grid gutter={0}>
          <GridCol span={{ base: 12, xs: 4, md: 5 }}>
            <Text component="span">{item.title.duration}</Text>
          </GridCol>
          <GridCol span={{ base: 12, xs: 6 }}>
            <Text component="span">{item.title.heading}</Text>
          </GridCol>
        </Grid>
      </AccordionControl>

      <AccordionPanel fz={'sm'}>
        <Container>
          <Stack>
            {item.desc.agenda && (
              <Stack gap={'xs'}>
                <Text inherit fw={500}>
                  {item.desc.agenda}
                </Text>
              </Stack>
            )}

            {item.desc.questions && (
              <Stack gap={'xs'}>
                <Divider
                  variant="dashed"
                  label="Questions"
                  labelPosition="left"
                />

                <Stack gap={'xs'}>
                  {item.desc.questions?.map((question: any) => (
                    <Text inherit key={question}>
                      {question}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            )}

            {item.desc.participants &&
              item.desc.participants?.filter((p: any) => p != undefined)
                .length > 0 && (
                <Stack gap={'xs'}>
                  {item.title.heading != 'Welcome & Opening Keynote' && (
                    <Divider
                      variant="dashed"
                      label={`Panelists`}
                      labelPosition="left"
                    />
                  )}

                  <Group>
                    {item.desc.participants.map(
                      (participant: any) =>
                        participant && (
                          <Anchor
                            key={participant.name}
                            underline="never"
                            w={'fit-content'}
                            component={Link}
                            href={
                              participant.bio
                                ? `/speakers/${linkify(participant.name)}`
                                : `/speakers`
                            }
                            target="_blank"
                          >
                            <CardSpeakerAgenda data={participant} />
                          </Anchor>
                        )
                    )}
                  </Group>
                </Stack>
              )}

            {item.desc.moderators &&
              item.desc.moderators?.filter((m: any) => m != undefined).length >
                0 && (
                <Stack gap={'xs'}>
                  <Divider
                    variant="dashed"
                    label={`Moderator`}
                    labelPosition="left"
                  />
                  {/* <Stack gap={"xs"}>
									{item.desc.moderators?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
                  <Group>
                    {item.desc.moderators.map(
                      (moderator: any) =>
                        moderator && (
                          <Anchor
                            key={moderator.name}
                            underline="never"
                            w={'fit-content'}
                            component={Link}
                            href={
                              moderator.bio
                                ? `/speakers/${linkify(moderator.name)}`
                                : `/speakers`
                            }
                            target="_blank"
                          >
                            <CardSpeakerAgenda data={moderator} />
                          </Anchor>
                        )
                    )}
                  </Group>
                </Stack>
              )}

            {item.desc.speaker && (
              <Stack gap={'xs'}>
                <Divider
                  variant="dashed"
                  label={`Speaker`}
                  labelPosition="left"
                />
                {/* <Stack gap={"xs"}>
									{item.desc.moderators?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
                <Anchor
                  key={item.desc.speaker.name}
                  underline="never"
                  w={'fit-content'}
                  component={Link}
                  href={
                    item.desc.speaker.bio
                      ? `/speakers/${linkify(item.desc.speaker.name)}`
                      : `/speakers`
                  }
                  target="_blank"
                >
                  <CardSpeakerAgenda data={item.desc.speaker} />
                </Anchor>
              </Stack>
            )}
          </Stack>
        </Container>
      </AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion
      defaultValue={data[0].title.duration}
      classNames={{
        control: clases.control,
        content: clases.content,
        label: clases.label,
        item: clases.item,
      }}
    >
      {items}
    </Accordion>
  );
}
