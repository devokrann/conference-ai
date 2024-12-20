'use client';

import React, { useState } from 'react';

import {
  Box,
  Center,
  Grid,
  GridCol,
  Stack,
  Text,
  Avatar as MantineAvatar,
} from '@mantine/core';
import { IconUpload, IconX, IconUserCircle } from '@tabler/icons-react';
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneProps,
  DropzoneReject,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Avatar({ ...restProps }: Partial<DropzoneProps>) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);

    const res = await fetch('/api/upload-avatar', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Avatar uploaded successfully!');
    } else {
      alert('Failed to upload avatar.');
    }
  };

  return (
    <Dropzone
      onDrop={(files) => handleFileChange(files[0])}
      onReject={() => {
        setFile(null);
        setPreview(null);
      }}
      maxSize={5 * 1024 ** 2}
      maxFiles={1}
      accept={IMAGE_MIME_TYPE}
      {...restProps}
    >
      <Box style={{ pointerEvents: 'none' }}>
        <DropzoneAccept>
          <Grid align="center">
            <GridCol span={{ base: 12, xs: 2 }}>
              <Center>
                <IconUpload
                  size={ICON_SIZE * 3}
                  stroke={ICON_STROKE_WIDTH}
                  color={'var(--mantine-color-blue-6)'}
                />
              </Center>
            </GridCol>

            <GridCol span={{ base: 12, xs: 10 }}>
              <Stack gap={4}>
                <Text>File accepted</Text>

                <Stack gap={0}>
                  <Text fz="sm" c="dimmed">
                    <Text inherit component="span" fw={'bold'}>
                      Accepted Types
                    </Text>
                    : png, gif, jpeg, svg+xml, webp, avif, heic, heif
                  </Text>

                  <Text fz="sm" c="dimmed">
                    <Text inherit component="span" fw={'bold'}>
                      Max size
                    </Text>
                    : 5 MB
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </DropzoneAccept>

        <DropzoneReject>
          <Grid align="center">
            <GridCol span={{ base: 12, xs: 2 }}>
              <Center>
                <IconX
                  size={ICON_SIZE * 3}
                  stroke={ICON_STROKE_WIDTH}
                  color={'var(--mantine-color-red-6)'}
                />
              </Center>
            </GridCol>

            <GridCol span={{ base: 12, xs: 10 }}>
              <Stack gap={4}>
                <Text c={'red.6'}>
                  File size too large or file type unaccepted
                </Text>

                {description}
              </Stack>
            </GridCol>
          </Grid>
        </DropzoneReject>

        <DropzoneIdle>
          <Grid align="center">
            <GridCol span={{ base: 12, xs: 2 }}>
              <Center>
                {file ? (
                  <MantineAvatar src={preview} size={80} radius={'sm'} />
                ) : (
                  <IconUserCircle
                    size={ICON_SIZE * 3}
                    stroke={ICON_STROKE_WIDTH}
                    color={'var(--mantine-color-gray-6)'}
                  />
                )}
              </Center>
            </GridCol>

            <GridCol span={{ base: 12, xs: 10 }}>
              <Stack gap={4}>
                {file ? (
                  <Text>File accepted</Text>
                ) : (
                  <Text>Drag image here or click to select file</Text>
                )}

                {description}
              </Stack>
            </GridCol>
          </Grid>
        </DropzoneIdle>
      </Box>
    </Dropzone>
  );
}

const description = (
  <Stack
    gap={0}
    c={'light-dark(var(--mantine-color-gray-6),var(--mantine-color-text))'}
  >
    <Text inherit fz="sm">
      <Text inherit component="span" fw={'bold'}>
        Accepted Types
      </Text>
      : png, gif, jpeg, svg+xml, webp, avif, heic, heif
    </Text>

    <Text inherit fz="sm">
      <Text inherit component="span" fw={'bold'}>
        Max size
      </Text>
      : 5 MB
    </Text>
  </Stack>
);
