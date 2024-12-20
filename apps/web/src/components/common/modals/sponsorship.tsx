import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text } from '@mantine/core';
import FormSponsorship from '@/components/form/sponsorship';

export default function Sponsorship({ label }: { label: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text>
            <Text component="span" inherit c={'pri'} fw={500}>
              {label} Sponsorship
            </Text>{' '}
            Application
          </Text>
        }
        size={'xl'}
        centered
      >
        <FormSponsorship />
      </Modal>

      <Button onClick={open} fullWidth color="sec" c={'dark.9'}>
        Apply For {label} Sponsorship
      </Button>
    </>
  );
}
