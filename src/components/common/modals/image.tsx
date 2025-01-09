'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Box } from '@mantine/core';
import classes from './image.module.scss';
import ImageDefault from '../images/default';

export default function Image({ image }: { image: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={'110vh'} centered>
        <ImageDefault
          src={image}
          alt={'gallery image'}
          height={{ base: 380 }}
          fit="contain"
          radius={'sm'}
        />
      </Modal>

      <Box onClick={open} className={classes.imageContainer}>
        <ImageDefault
          src={image}
          alt={'gallery image'}
          height={{ base: 180 }}
          className={classes.imageOuter}
        />
      </Box>
    </>
  );
}
