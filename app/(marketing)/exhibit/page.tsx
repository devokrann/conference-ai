import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Exhibit" };

export default async function Exhibit() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Exhibit page
			</LayoutSection> */}

			<Layout.Section containerized margined>
				<Stack ta={"center"} gap={"xl"}>
					<Title order={2} fz={40} c={"pri"}>
						Exhibition and Booth Packages
					</Title>
					<Text>
						Unlock unparalleled opportunities for exposure, collaboration, and growth by becoming an
						exhibitor at the Ai & Drone Conference . Our event serves as a dynamic platform for you to
						showcase your products, services, and innovations to a diverse audience of industry
						professionals, enthusiasts, potential partners, and customers. As an exhibitor, you’ll gain
						access to a unique ecosystem that fosters connections, drives business growth, and positions you
						as a leader in the drone industry.
					</Text>
				</Stack>
			</Layout.Section>
			<Layout.Section containerized margined>
				<Grid gutter={"xl"} align="center">
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Center>
							<Image src={image.poster.poster1} alt="poster" w={"100%"} />
						</Center>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Stack gap={"xl"} ta={{ base: "center", sm: "start" }}>
							<Text>
								The two-day event is an ideal platform to penetrate the market of Unmanned Aircraft
								Systems (UAS) or Drones, Big Data and AI that will put products and Services in front of
								an audience of decision-makers, investors and organizations looking for solutions that
								will increase efficiency, mitigate risk and improve safety.
							</Text>
							<Text>
								As an exhibitor you will gain unprecedented exposure to each and every one of our
								pre-qualified visitors, all of whom are looking to find the latest products and
								solutions that are revolutionizing Drones, data and AI sectors.
							</Text>
							<Text>
								By placing yourself in front of these potential clients, you have the chance to pitch to
								them first hand with the ability to achieve a direct line to market all in one place.
							</Text>
							{/* <Image src={image.brand.landscape} w={"100%"} px={"xl"} visibleFrom="md" /> */}
							<Button
								component={"a"}
								href={"#booths"}
								leftSection={<IconArrowDown size={20} />}
								rightSection={<IconArrowDown size={20} />}
							>
								Book A Booth
							</Button>
						</Stack>
					</Grid.Col>
				</Grid>
			</Layout.Section>
			<Layout.Section containerized margined id="exhibitors">
				<Stack gap={48}>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Our Exhibitors
						</Title>
						{/* <Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text> */}
					</Stack>
					<Grid>
						{data.exhibition.exhibitors.map(exhibitor => (
							<Grid.Col span={{ base: 6, xs: 4, md: 3 }} key={exhibitor.name}>
								<Component.Image.Exhibitor data={exhibitor} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
			<Layout.Section containerized margined id="booths">
				<Stack gap={48}>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Book Your Space
						</Title>
						<Text>
							Additional tickets to the quantity listed in each package will have to be purchased
							separately; i.e. Additional participants will have to purchase a ticket.
						</Text>
					</Stack>
					<Grid justify="center">
						{data.exhibition.booths.map(booth => (
							<Grid.Col key={booth.price} span={{ base: 12, sm: 6 }}>
								<Card.Booth data={booth} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
		</LayoutPage>
	);
}
