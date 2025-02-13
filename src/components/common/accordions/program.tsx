import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import CardSpeakerAgenda from '../cards/speaker/agenda';
import clases from './program.module.scss';
import ModalSpeaker from '../modals/speaker';

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
                      (participant: any, index: number) =>
                        participant && (
                          <ModalSpeaker
                            key={index}
                            props={{ speaker: participant }}
                          >
                            <CardSpeakerAgenda data={participant} />
                          </ModalSpeaker>
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

                  <Group>
                    {item.desc.moderators.map(
                      (moderator: any, index: number) =>
                        moderator && (
                          <ModalSpeaker
                            key={index}
                            props={{ speaker: moderator }}
                          >
                            <CardSpeakerAgenda data={moderator} />
                          </ModalSpeaker>
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

                <ModalSpeaker props={{ speaker: item.desc.speaker }}>
                  <CardSpeakerAgenda data={item.desc.speaker} />
                </ModalSpeaker>
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
