import React from "react";
import { Link } from "react-router-dom";

import { Anchor, Box, Card, Group, Image, Stack, Text } from "@mantine/core";

import hook from "@/hooks";

import { typeSpeaker } from "@/types/people";

import classes from "./Listing.module.scss";

import icons from "@/data/icons";

export default function Listing({ data }: { data: typeSpeaker }) {
	return (
		<Stack gap={"xs"} className={classes.card}>
			<Anchor
				className={classes.imageContainer}
				component={Link}
				to={data.bio ? `${hook.useLinkify(data.name)}` : `#`}
			>
				<Image src={data.image} alt={data.name} className={classes.image} loading="lazy" />
			</Anchor>
			<Stack gap={0} align="center" ta={"center"} fw={500}>
				<Text className={classes.title}>{data.name}</Text>
				<Text inherit fz={"xs"}>
					{data.occupation.position}
				</Text>
				{data.occupation.pow && (
					<Text inherit fz={"xs"}>
						{data.occupation.pow}
					</Text>
				)}
			</Stack>
		</Stack>
	);
}
