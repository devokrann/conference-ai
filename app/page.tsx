import React from "react";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import LayoutBody from "@/layouts/Body";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footers/Main";
import NotificationMain from "@/partials/notifications/Main";
import HeaderMain from "@/partials/headers/Main";

export default function Home() {
	return (
		<LayoutBody bar={<NotificationMain />} header={<HeaderMain />} nav={<NavbarMain />} footer={<FooterMain />}>
			<main>
				<LayoutPage>
					{/* <LayoutSection padded containerized={"responsive"}>
						<div>Home Page</div>
					</LayoutSection> */}

					<Layout.Section containerized padded>
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"sec"}>
									Explore The Fusion of AI, Drone Tech and Data Analytics
								</Title>
								<Text>
									The AI conference in Nairobi is a cutting-edge conference that will bring together
									thought leaders, innovators, and enthusiasts in the fields of Artificial
									Intelligence, Drone Technology, and Data Analytics.
								</Text>
							</Stack>
							<Group justify="center" gap={48}>
								<Button leftSection={"1"} component="a" href="#objectives">
									Objectives
								</Button>
								<Button leftSection={"2"} component="a" href="#who">
									Who Attends
								</Button>
								<Button leftSection={"3"} component="a" href="#why">
									Why Attend
								</Button>
							</Group>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized padded id="objectives">
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"pri"}>
									Objectives
								</Title>
								<Text>
									The event aims to explore the synergies between these rapidly evolving technologies,
									fostering collaboration, and inspiring the next wave of breakthroughs.
								</Text>
							</Stack>
							<Grid justify="center">
								{data.content.objectives.map(objective => (
									<Grid.Col key={objective.title} span={{ base: 12, sm: 6, md: 4 }}>
										<Card.Objective data={objective} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized padded id="who">
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"pri"}>
									Who Attends?
								</Title>
								<Text>
									The event aims to explore the synergies between these rapidly evolving technologies,
									fostering collaboration, and inspiring the next wave of breakthroughs.
								</Text>
							</Stack>
							<Grid justify="center">
								{data.content.whoAttends.map(item => (
									<Grid.Col key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
										<Card.Audience data={item} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized padded id="why">
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"pri"}>
									Why Attend?
								</Title>
								<Text>
									The AI conference in Nairobi is a cutting-edge conference that will bring together
									thought leaders, innovators, and enthusiasts in the fields of Artificial
									Intelligence, Drone Technology, and Data Analytics. The event aims to explore the
									synergies between these rapidly evolving technologies, fostering collaboration, and
									inspiring the next wave of breakthroughs.
								</Text>
							</Stack>
							<Grid justify="center">
								{data.content.whyAttend.map(item => (
									<Grid.Col key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
										<Card.Why data={item} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized id="partners">
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"pri"}>
									Partners
								</Title>
								{/* <Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text> */}
							</Stack>
							<Grid>
								{data.partners.map(partner => (
									<Grid.Col span={{ base: 6, sm: 3 }} key={partner.name}>
										<Component.Image.Sponsor data={partner} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized padded id="sponsors">
						<Stack gap={48}>
							<Stack ta={"center"} gap={"xl"}>
								<Title order={2} fz={40} c={"pri"}>
									Sponsors
								</Title>
								{/* <Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text> */}
							</Stack>
							<Grid>
								{data.sponsorship.sponsors.map(sponsor => (
									<Grid.Col span={{ base: 6, sm: 3 }} key={sponsor.name}>
										<Component.Image.Sponsor data={sponsor} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Layout.Section>
					<Layout.Section containerized padded>
						<Stack gap={"xs"}>
							{/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Powered By{" "}
								<Text component="span" inherit c={"sec.6"}>
									Drone Space!
								</Text>
							</Title>
							<Text></Text>
						</Stack> */}
							<Grid justify="center">
								<Grid.Col span={{ base: 12 }} mx={"auto"}>
									<Grid gutter={"xl"}>
										<Grid.Col span={{ base: 12 }} mx={"auto"}>
											<Divider label={"powered by"} w={"50%"} mx={"auto"} />
										</Grid.Col>
										<Grid.Col span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
											{/* <Card.Partner
											data={{
												image: droneSpaceImage,
												title: "Drone Space",
											}}
											noPadding
										/> */}
											<Image src={droneSpaceImage} alt="Drone Space" />
										</Grid.Col>
									</Grid>
								</Grid.Col>
							</Grid>
						</Stack>
					</Layout.Section>
				</LayoutPage>
			</main>
		</LayoutBody>
	);
}
