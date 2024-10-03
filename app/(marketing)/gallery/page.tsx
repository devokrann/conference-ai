import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

export const metadata: Metadata = { title: "Gallery" };

export default async function Gallery() {
	return (
		<LayoutPage>
			{/* <LayoutSection padded containerized={"responsive"}>
				Gallery page
			</LayoutSection> */}

			<Layout.Section>
				<Stack gap={48}>
					{/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								2024 Moments
							</Title>
							<Text>Our best Speakers will be added soon</Text>
						</Stack> */}
					<Grid justify="center" gutter={0}>
						{utility.shuffle.array(data.gallery.conference.concat(data.gallery.expo)).map(item => (
							<Grid.Col key={item.image} span={{ base: 12, xs: 4, md: 3 }}>
								<Component.Modal.Image image={item.image} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
		</LayoutPage>
	);
}
