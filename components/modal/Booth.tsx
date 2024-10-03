import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text } from "@mantine/core";

import Partial from "@src/partials";

export default function Booth({ label }: { label: string }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title={
					<Text>
						<Text component="span" inherit c={"pri"} fw={500}>
							{label} Booth
						</Text>{" "}
						Registration
					</Text>
				}
				size={"xl"}
				centered
			>
				<Partial.Form.Booth />
			</Modal>

			<Button onClick={open} fullWidth color="sec" c={"dark.9"}>
				Book {label} Booth
			</Button>
		</>
	);
}
