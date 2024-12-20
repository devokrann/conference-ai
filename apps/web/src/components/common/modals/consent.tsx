import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Stack,
  Text,
  Image,
  List,
  Group,
  Grid,
  GridCol,
  Anchor,
} from '@mantine/core';
import { images } from '@/assets/images';

export default function Consent() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={'Consent To Use Your Media'}
        centered
        size={'xl'}
      >
        <Grid gutter={'xl'} align="end" fz={'sm'}>
          <GridCol span={{ base: 12, md: 9 }}>
            <Stack>
              <Text inherit>
                During the event, our media team will be taking photos, videos
                and collecting various other media content about the event. The
                content will then be:
              </Text>
              <List fz={'inherit'}>
                <List.Item>
                  kept by Drone Space for record and reference purposes
                </List.Item>
                <List.Item>
                  used for future Drone Space hosted event marketing purposes
                </List.Item>
                <List.Item>
                  shared on the Drone Space social media platforms
                </List.Item>
              </List>
              <Text inherit>
                Scan the QR code to let us know whether or not you give your
                consent to the collection of media content that can be used to
                personally identify you.
              </Text>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 3 }}>
            <Group justify="center">
              <Image src={images.codeConsent} w={'100%'} alt="QR code" />
            </Group>
          </GridCol>

          <GridCol span={{ base: 12 }}>
            <Text inherit ta={'center'}>
              Can&apos;t use QR? Here&apos;s a link to the{' '}
              <Anchor
                inherit
                href="https://docs.google.com/forms/d/e/1FAIpQLSd-YnyUrzOw0DyPhEyWICqVylTKPuh87RXsFe8DMTzGJj2_xA/viewform?usp=sf_link"
                target="_blank"
              >
                consent form
              </Anchor>
              .
            </Text>
          </GridCol>
        </Grid>
      </Modal>

      <Anchor inherit c={'inherit'} onClick={open}>
        Media Use Consent
      </Anchor>
    </>
  );
}
