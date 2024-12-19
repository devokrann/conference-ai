import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Flex, Group, Image, Text } from "@mantine/core";

import { IconPointFilled } from "@tabler/icons-react";

import classes from "./Main.module.scss";

import data from "@/data";

import Switch from "@/components/switches";
import Component from "@/components";

export default function Main() {
	return (
		<Box className={classes.box}>
			<Container>
				<Flex direction={{ base: "column", xs: "row" }} align={"center"} justify="space-between" gap={"sm"}>
					<Flex align={"center"} direction={{ base: "column", xs: "row" }} gap={"xs"}>
						<Text inherit>26 - 27 March, 2024</Text>
						<Text component="span" inherit visibleFrom="xs">
							|
						</Text>
						<Text inherit>Sarit Expo Centre, Westlands</Text>
					</Flex>
					<Flex align={"center"} gap={"sm"} direction={{ base: "column", xs: "row" }}>
						<Group gap={"xs"}>
							{data.links.social.map(link => (
								<Text key={link.link} component="a" href={link.link} target="_blank">
									<Image
										src={link.icon}
										alt={`social icon ${data.links.social.indexOf(link)}`}
										w={24}
									/>
								</Text>
							))}
						</Group>
						<Text component="span" inherit visibleFrom="xs">
							|
						</Text>
						<Component.Modal.Consent />
						{/* <Switch.Theme /> */}
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
