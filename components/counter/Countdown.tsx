import React, { useEffect, useState } from "react";

import { Grid, Stack, Text } from "@mantine/core";
import useCountdown from "@/hooks/timers/countdown";
import data from "@/data";

export default function Countdown() {
	const targetDate = data.date.eventDay;

	const [time, setTime] = useState(useCountdown(targetDate));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(useCountdown(targetDate));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const values = [
		// { label: "Months", value: time.months },
		// { label: "Days", value: time.days + time.months * 30 },
		{ label: "Hours", value: time.hours + time.days * 24 },
		{ label: "Minutes", value: time.minutes },
		{ label: "Seconds", value: time.seconds },
	];

	return (
		<Grid>
			{values.map(value => (
				<Grid.Col key={value.label} span={"auto"}>
					<Stack gap={0} align="center" c={"white"}>
						<Text fz={{ base: 24, md: 40 }} fw={"bold"}>
							{value.value < 10 ? `0${value.value}` : value.value}
						</Text>
						<Text fz={{ base: 16, md: 24 }} fw={500} ta={"center"}>
							{value.label}
						</Text>
					</Stack>
				</Grid.Col>
			))}
		</Grid>
	);
}
