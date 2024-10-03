import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Tickets" };

export default async function Tickets() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Tickets page
			</LayoutSection> */}

			<Layout.Section containerized margined>
				<Stack align="center" ta={"center"} gap={"xl"}>
					<Title order={2} fz={40} c={"pri"}>
						Get Your Tickets
					</Title>
					<Text>All pass types provide access to the conference & exhibition hall.</Text>
					<Divider label="tickets provided by" c={"sec"} w={{ base: "100%", xs: "66%" }} />
					<Anchor target="_blank">
						<Card.Partner
							data={{ image: image.partners.media.image6, title: "Ticketyetu", width: "50%" }}
						/>
					</Anchor>
				</Stack>
			</Layout.Section>
			<Layout.Section containerized margined>
				<Grid justify="center">
					{data.tickets.map(ticket => (
						<Grid.Col key={ticket.title} span={{ base: 12, sm: 6 }}>
							<Card.Ticket data={ticket} />
						</Grid.Col>
					))}
				</Grid>
			</Layout.Section>
		</LayoutPage>
	);
}
