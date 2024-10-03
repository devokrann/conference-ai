"use client";

import React from "react";
import { useRef } from "react";

import { Carousel } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import ModalImage from "../modal/Image";

export default function Gallery({ data, delay }: { data: { image: string }[]; delay: number }) {
	const autoplay = useRef(Autoplay({ delay: delay ? delay : 2000 }));

	const slides = data.map(item => (
		<Carousel.Slide key={Math.random()}>
			<ModalImage image={item.image} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			loop={true}
			slidesToScroll={1}
			slideGap={0}
			withIndicators={false}
			withControls={false}
			plugins={[autoplay.current]}
			slideSize={{ base: "50%", xs: "25%", sm: "33%", md: "16.67%", lg: "14.28%" }}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
