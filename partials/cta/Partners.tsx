import React from "react";

import Carousel from "@/components/carousel";
import Layout from "@/layouts";

import data from "@/data";

export default function Partners() {
	return (
		<Layout.Section id="partners" bg={"var(--mantine-color-gray-light)"}>
			<Carousel.Partners />
		</Layout.Section>
	);
}
