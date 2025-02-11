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
          height={{ base: 180, xs: 320, md: 380 }}
          width={{ base: '100%' }}
          // fit="contain"
          radius={'sm'}
        />
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
