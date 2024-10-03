import React from "react";

import { Card, Group, Image, Stack, Text } from "@mantine/core";

import { typeSpeaker } from "@src/types/people";

import classes from "./Agenda.module.scss";

export default function Agenda({ data }: { data: typeSpeaker }) {
	return (
		<Card className={classes.card}>
			<Group gap={"xs"}>
				<Image src={data.image} alt={data.name} className={classes.image} loading="lazy" />
				<Stack gap={0}>
					<Text inherit>{data.name}</Text>
					<Text inherit className={classes.occupation}>
						{data.occupation.position} {data.occupation.pow && `, ${data.occupation.pow}`}
					</Text>
				</Stack>
			</Group>
		</Card>
	);
}
