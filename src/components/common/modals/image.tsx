'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Box, Group, ActionIcon } from '@mantine/core';
import classes from './image.module.scss';
import ImageDefault from '../images/default';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconX } from '@tabler/icons-react';

export default function Image({ image }: { image: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={'110vh'}
        centered
        withCloseButton={false}
        padding={0}
      >
        <div
          style={{
            position: 'relative',
            border: '1.5px solid var(--mantine-color-sec-4)',
            borderRadius: 'var(--mantine-radius-md)',
            overflow: 'hidden',
          }}
        >
          <ImageDefault
            src={image}
            alt={'gallery image'}
            height={{ base: 180, xs: 320, md: 380 }}
            width={{ base: '100%' }}
          />

          <Group
            justify="end"
            pos={'absolute'}
            right={'var(--mantine-spacing-xs)'}
            top={'var(--mantine-spacing-xs)'}
          >
            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color="var(--mantine-color-white)"
              variant="subtle"
              onClick={close}
            >
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Group>
        </div>
      </Modal>

      <Box onClick={open} className={classes.imageContainer}>
        <ImageDefault
          src={image}
          alt={'gallery image'}
          height={{ base: 200 }}
          className={classes.imageOuter}
        />
      </Box>
    </>
  );
}
