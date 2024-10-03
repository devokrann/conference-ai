import React from "react";
import Link from "next/link";

import { Anchor, Box, Breadcrumbs } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import classes from "./Hero.module.scss";

export default function Hero({ data }: { data: { label: string; link: string }[] }) {
	return (
		<Breadcrumbs separator={<IconChevronRight color="var(--mantine-color-white)" size={12} stroke={2} />}>
			{data.map(crumb => (
				<Anchor
					component={Link}
					href={crumb.link}
					key={crumb.link}
					className={classes.link}
					// c={data.indexOf(crumb) == data.length - 1 ? "pri" : ""}
				>
					{crumb.label}
				</Anchor>
			))}
		</Breadcrumbs>
	);
}
