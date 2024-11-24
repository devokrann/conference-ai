import React from "react";

import { Box, Divider, Grid, GridCol, Stack, Text, Title } from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import CardBlogNew from "@/components/card/blog/New";
import CardBlogMain from "@/components/card/blog/Main";

import posts from "@/data/blog";

export default function Blog() {
	return (
		<LayoutPage>
			<Layout.Section containerized margined>
				<Grid justify="center" columns={20} gutter={"xl"}>
					{data.people.map(person => (
						<Grid.Col key={person.name} span={{ base: 20, xs: 10, sm: 5, md: 4 }}>
							<Component.Card.Speaker.Listing data={person} />
						</Grid.Col>
					))}
				</Grid>
			</Layout.Section>
		</LayoutPage>
	);
}
