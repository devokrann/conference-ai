import React from "react";

import { Group, Image } from "@mantine/core";

import classes from "./Exhibitor.module.scss";

export default function Sponsor({ data }: { data: { image: string; name: string; width: string; bg?: string } }) {
	return (
		<Group justify="center" mih={200} className={classes.card} bg={data.bg && data.bg}>
			<Image src={data.image} alt={data.name} w={data.width} className={classes.image} />
		</Group>
	);
}
