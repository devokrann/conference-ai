import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Booths" };

export default async function Booths() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Booths page
			</LayoutSection> */}

			<Layout.Section containerized margined>
				<Stack ta={"center"} gap={"xl"}>
					<Title order={2} fz={40} c={"pri"}>
						Book Your Space
					</Title>
					<Text>
						Additional tickets to the quantity listed in each package will have to be purchased separately;
						i.e. Additional participants will have to purchase a ticket.
					</Text>
				</Stack>
			</Layout.Section>
			<Layout.Section containerized margined>
				<Grid justify="center">
					{data.exhibition.booths.map(booth => (
						<Grid.Col key={booth.price} span={{ base: 12, sm: 6 }}>
							<Card.Booth data={booth} />
						</Grid.Col>
					))}
				</Grid>
			</Layout.Section>
		</LayoutPage>
	);
}
