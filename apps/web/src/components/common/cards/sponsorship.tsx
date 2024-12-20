import React from 'react';
import { Divider, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ModalContact from '../modals/contact';
import classes from './Sponsorship.module.scss';

interface SponsorshipProps {
  title: string;
  price: string;
  desc: string[];
  sold: boolean;
}

export default function Sponsorship({ data }: { data: SponsorshipProps }) {
  return (
    <Stack className={classes.card} gap={'xl'} justify="space-between">
      <Stack gap={'xl'}>
        <Stack gap={'xs'} align="center">
          <Text ta={'center'}>
            Kshs.{' '}
            <Text
              component="span"
              inherit
              fw={500}
              fz={32}
              className={classes.price}
            >
              {data.price}
            </Text>
          </Text>
          <Title order={3} fz={24} ta={'center'}>
            {data.title} Sponsorship Package
          </Title>
        </Stack>
        <Divider color="sec" />
        <Stack fz="sm">
          {data.desc.map((item) => (
            <Group key={item} wrap="nowrap" align="start">
              <ThemeIcon
                size={'xs'}
                variant="transparent"
                className={classes.icon}
              >
                <IconCheck size={16} />
              </ThemeIcon>
              <Text key={item} inherit>
                {item}
              </Text>
            </Group>
          ))}
        </Stack>
      </Stack>

      {/* <Modal.Sponsorship label={data.title} /> */}

      <ModalContact
        title={`${data.title} Sponsorship`}
        inquiry="Sponsorship Application"
        sponsorPackage={data.title}
        sold={data.sold}
      >
        Apply For {data.title} Sponsorship
      </ModalContact>
    </Stack>
  );
}
