import React from "react";

import { Box, Button, Container, Grid, Group, Stack, Title } from "@mantine/core";

import Counter from "@src/components/counter";

import classes from "./Main.module.scss";
import { Link } from "react-router-dom";

import data from "@src/data";
export default function Main() {
	return (
		<Box className={classes.cta} py={"xl"}>
			<Container size={"md"}>
				<Stack gap={48}>
					{/* <Title order={6} fz={32} ta={"center"} c={"sec"}>
						Don't Wait Too Long!
					</Title> */}
					<Counter.Countdown />
					{/* <Group gap={"xl"} justify="center">
						<Button component={Link} to={"/registration/tickets"}>
							Buy Ticket
						</Button>
						<Button component={Link} to={"/registration/booths"} color="sec" c={"dark.9"}>
							Book Booth
						</Button>
					</Group> */}
				</Stack>
			</Container>
		</Box>
	);
}
