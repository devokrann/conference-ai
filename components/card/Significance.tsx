import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Significance.module.scss";

export default function Significance({ data }: { data: { icon: Icon; title: string; desc: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xl"}>
					<Group justify="space-between">
						<Title order={3} fz={24} h={56} className={classes.title} c={"pri"} w={{ md: "80%" }}>
							{data.title}
						</Title>
						<ThemeIcon size={56} variant="light" className={classes.icon} visibleFrom="md">
							<data.icon size={48} />
						</ThemeIcon>
					</Group>
					<Divider color="sec" className={classes.divider} visibleFrom="md" />
				</Stack>
				<Text>{data.desc}</Text>
			</Stack>
		</Stack>
	);
}
