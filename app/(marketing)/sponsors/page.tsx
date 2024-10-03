import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Sponsors" };

export default async function Sponsors() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Sponsors page
			</LayoutSection> */}

			<Layout.Section containerized padded id="sponsors">
				<Stack gap={48}>
					{/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Sponsors
							</Title>
							<Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text>
						</Stack> */}
					<Grid>
						{data.sponsorship.sponsors.map(sponsor => (
							<Grid.Col span={{ base: 6, xs: 6, md: 3 }} key={sponsor.name}>
								<Component.Image.Sponsor data={sponsor} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
			{/* <Layout.Section containerized padded id="partners">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Our Media Partners
							</Title>
							<Text></Text>
						</Stack>
						<Grid justify="center">
							<Grid.Col span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<Grid.Col span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.media.image3,
												title: "Radio Africa Events",
												width: "60%",
											}}
										/>
									</Grid.Col>
								</Grid>
							</Grid.Col>
							{data.partners.map(item => (
								<Grid.Col key={item.title} span={{ base: 12, xs: 6, sm: 4 }}>
									<Card.Partner data={item} />
								</Grid.Col>
							))}
							<Grid.Col span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<Grid.Col span={{ base: 12 }} mx={"auto"}>
										<Divider label={"powered by"} w={"50%"} mx={"auto"} />
									</Grid.Col>
									<Grid.Col span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.other.partner1,
												title: "Drone Space",
											}}
											noPadding
										/>
									</Grid.Col>
								</Grid>
							</Grid.Col>
						</Grid>
						<Text ta={"center"} fz={"xl"} tt={"uppercase"}>
							Powered by{" "}
							<Text component="span" inherit fw={"bold"} c={"sec.6"}>
								Drone Space!
							</Text>
						</Text>
					</Stack>
				</Layout.Section> */}
			{/* <Layout.Section containerized margined padded id="exhibitors">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Our Sponsors
							</Title>
						</Stack>
						<Grid>
							{data.sponsorship.sponsors.map(sponsor => (
								<Grid.Col span={{ base: 12, xs: 6, md: 3 }} key={sponsor.name}>
									<Component.Image.Sponsor data={sponsor} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section> */}
			<Layout.Section containerized margined>
				<Stack gap={48}>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Sponsorship Opportunities
						</Title>
						<Text>Select a sponsorship package from our list and become one of our proud affiliates.</Text>
					</Stack>
					<Grid justify="center" gutter={"xl"}>
						{data.sponsorship.packages.map(item => (
							<Grid.Col span={{ base: 12, sm: 6 }} key={item.title}>
								<Card.Sponsorship data={item} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
		</LayoutPage>
	);
}
