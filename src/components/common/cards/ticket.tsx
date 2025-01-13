'use client';

import React from 'react';
import { Button, Divider, Stack, Text, Title } from '@mantine/core';
import classes from './ticket.module.scss';

const link = 'https://ticketyetu.com/event/ai-conference-62/register';

export default function Ticket({
  data,
}: {
  data: { title: string; price: string; desc: string[] };
}) {
  return (
    <Stack className={classes.card} gap={'xl'} justify="space-between">
      <Stack gap={'xl'}>
        <Stack gap={'xs'} align="center">
          <Text ta={'center'} fw={500} fz={32} c={'pri'}>
            <Text component="span" inherit fz={'md'} c={'white'}>
              Kshs.{' '}
            </Text>
            {data.price}
          </Text>
          <Title order={3} fz={24} ta={'center'}>
            {data.title} Ticket
          </Title>
        </Stack>
        <Divider color="pri" />
        {typeof data.desc == 'string' ? (
          <Text>{data.desc}</Text>
        ) : (
          <Stack gap={'xs'} align="center">
            {data.desc.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Stack>
        )}
      </Stack>
      <Button
        fullWidth
        color="sec"
        c={'dark.9'}
        component="a"
        href={link}
        target="_blank"
        onClick={(e) => e.preventDefault()}
      >
        {/* Buy {data.title} Ticket */}
        Sold Out
      </Button>
    </Stack>
  );
}
