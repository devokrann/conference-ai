import React from "react";
import { Link } from "react-router-dom";

import { Accordion, Anchor, Center, Container, Divider, Grid, Group, Stack, Text } from "@mantine/core";

import { typeSpeaker } from "@/types/people";

import card from "../card";

import clases from "./Program.module.scss";
import hook from "@/hooks";

export default function Program({
	data,
}: {
	data: {
		title: { duration: string; heading: string };
		desc: {
			agenda: string;
			questions?: string[];
			participants?: typeSpeaker[];
			moderators?: typeSpeaker[];
			speaker?: typeSpeaker;
		};
	}[];
}) {
	const items = data.map(item => (
		<Accordion.Item key={item.title.duration} value={item.title.duration}>
			<Accordion.Control>
				<Grid gutter={0}>
					<Grid.Col span={{ base: 12, xs: 4, md: 5 }}>
						<Text component="span">{item.title.duration}</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						<Text component="span">{item.title.heading}</Text>
					</Grid.Col>
				</Grid>
			</Accordion.Control>
			<Accordion.Panel fz={"sm"}>
				<Container>
					<Stack>
						{item.desc.agenda && (
							<Stack gap={"xs"}>
								{/* <Divider variant="dashed" label="Agenda" labelPosition="left" /> */}
								<Text inherit fw={500}>
									{item.desc.agenda}
								</Text>
							</Stack>
						)}

						{item.desc.questions && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label="Questions" labelPosition="left" />
								<Stack gap={"xs"}>
									{item.desc.questions?.map(question => (
										<Text inherit key={question}>
											{question}
										</Text>
									))}
								</Stack>
							</Stack>
						)}

						{item.desc.participants && item.desc.participants?.filter(p => p != undefined).length > 0 && (
							<Stack gap={"xs"}>
								{item.title.heading != "Welcome & Opening Keynote" && (
									<Divider variant="dashed" label={`Panelists`} labelPosition="left" />
								)}
								{/* <Stack gap={"xs"}>
									{item.desc.participants?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
								<Group>
									{item.desc.participants.map(
										participant =>
											participant && (
												<Anchor
													key={participant.name}
													underline="never"
													w={"fit-content"}
													component={Link}
													to={
														participant.bio
															? `/speakers/${hook.useLinkify(participant.name)}`
															: `/speakers`
													}
													target="_blank"
												>
													<card.Speaker.Agenda data={participant} />
												</Anchor>
											)
									)}
								</Group>
							</Stack>
						)}

						{item.desc.moderators && item.desc.moderators?.filter(m => m != undefined).length > 0 && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label={`Moderator`} labelPosition="left" />
								{/* <Stack gap={"xs"}>
									{item.desc.moderators?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
								<Group>
									{item.desc.moderators.map(
										moderator =>
											moderator && (
												<Anchor
													key={moderator.name}
													underline="never"
													w={"fit-content"}
													component={Link}
													to={
														moderator.bio
															? `/speakers/${hook.useLinkify(moderator.name)}`
															: `/speakers`
													}
													target="_blank"
												>
													<card.Speaker.Agenda data={moderator} />
												</Anchor>
											)
									)}
								</Group>
							</Stack>
						)}

						{item.desc.speaker && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label={`Speaker`} labelPosition="left" />
								{/* <Stack gap={"xs"}>
									{item.desc.moderators?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
								<Anchor
									key={item.desc.speaker.name}
									underline="never"
									w={"fit-content"}
									component={Link}
									to={
										item.desc.speaker.bio
											? `/speakers/${hook.useLinkify(item.desc.speaker.name)}`
											: `/speakers`
									}
									target="_blank"
								>
									<card.Speaker.Agenda data={item.desc.speaker} />
								</Anchor>
							</Stack>
						)}
					</Stack>
				</Container>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			defaultValue={data[0].title.duration}
			classNames={{ control: clases.control, content: clases.content, label: clases.label, item: clases.item }}
		>
			{items}
		</Accordion>
	);
}
