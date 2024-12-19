import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text, Image, AspectRatio } from "@mantine/core";

import Partial from "@/partials";

import classes from "./Image.module.scss";

export default function ModalImage({ image }: { image: string }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} size={"110vh"} centered>
				<AspectRatio ratio={1920 / 1080}>
					<Image src={image} alt="gallery image" loading="lazy" />
				</AspectRatio>
			</Modal>

			<AspectRatio ratio={1920 / 1080} onClick={open} className={classes.imageContainer}>
				<Image src={image} alt="gallery image" loading="lazy" className={classes.imageOuter} />
			</AspectRatio>
		</>
	);
}
