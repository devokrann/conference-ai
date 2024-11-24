import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Agenda" };

export default async function Agenda() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Agenda page
			</LayoutSection> */}

			<Layout.Section containerized containerSize="xl" margined>
				<Stack gap={48}>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Overview
						</Title>
						<Text>
							Plan Your Conference Experience with Ease. Explore the sessions and tracks at the Ai
							Conference Nairobi. Stay tuned for the detailed agenda, which includes speaker session
							times, and valuable insights.
						</Text>
					</Stack>
					<Stack align="center">
						<Button
							color="pri.6"
							variant="outline"
							size="lg"
							radius={"xl"}
							c={"inherit"}
							component="a"
							href="#tracks"
						>
							View Breakdown
						</Button>
					</Stack>
					<Stack gap={"xl"} mx={"auto"} w={{ base: "100%", sm: "75%" }}>
						<Divider color="pri" />
						<Grid>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<Stack ta={{ base: "center", sm: "start" }}>
									<Title order={4} fz={16}>
										26<sup>th</sup> March
									</Title>
									<List spacing={"xs"} listStyleType="none" size="sm">
										{data.program.schedule.day1.map(item => (
											<List.Item key={item.title.duration}>
												<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
													<Text component="span" inherit>
														{item.title.duration}
													</Text>
													-
													<Text component="span" inherit>
														{item.title.heading}
													</Text>
												</Group>
											</List.Item>
										))}
									</List>
								</Stack>
							</Grid.Col>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<Stack ta={{ base: "center", sm: "start" }}>
									<Title order={4} fz={16}>
										27<sup>th</sup> March
									</Title>
									<List spacing={"xs"} listStyleType="none" size="sm">
										{data.program.schedule.day2.map(item => (
											<List.Item key={item.title.duration}>
												<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
													<Text component="span" inherit>
														{item.title.duration}
													</Text>
													-
													<Text component="span" inherit>
														{item.title.heading}
													</Text>
												</Group>
											</List.Item>
										))}
									</List>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Stack>
			</Layout.Section>
			<Layout.Section containerized margined padded id="tracks">
				<Stack gap={48}>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Breakdown
						</Title>
						<Text>
							Discover the latest trends, advancements, and best practices shaping the future of AI, Drone
							Tech and Data Analytics as industry experts, government organizations, disruptive startups,
							investors, research labs take the stage.
						</Text>
					</Stack>
					<Grid>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Stack gap={"xl"}>
								<Title ta={"center"} order={2} fz={24}>
									26<sup>th</sup> March (Day 1)
								</Title>
								<Accordion.Program data={data.program.schedule.day1} />
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Stack gap={"xl"}>
								<Title ta={"center"} order={2} fz={24}>
									27<sup>th</sup> March (Day 2)
								</Title>
								<Accordion.Program data={data.program.schedule.day2} />
							</Stack>
						</Grid.Col>
					</Grid>
				</Stack>
			</Layout.Section>
		</LayoutPage>
	);
}
