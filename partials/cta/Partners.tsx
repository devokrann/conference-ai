import React from "react";

import Carousel from "@src/components/carousel";
import Layout from "@src/layouts";

import data from "@src/data";

export default function Partners() {
	return (
		<Layout.Section id="partners" bg={"var(--mantine-color-gray-light)"}>
			<Carousel.Partners />
		</Layout.Section>
	);
}
