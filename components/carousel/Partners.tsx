import React from "react";
import { useRef } from "react";

import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image, useMantineColorScheme } from "@mantine/core";

import Autoplay from "embla-carousel-autoplay";

import image from "@src/assets/images";

export default function Partners() {
	const autoplay = useRef(Autoplay({ delay: 2000 }));
	const { colorScheme } = useMantineColorScheme();

	const partners = [
		{
			image: image.partners.media.image10,
			link: "https://safaricom.co.ke/",
			title: "Safaricom",
			width: "60%",
		},
		{
			image: image.partners.media.image14,
			link: "https://www.kenya-airways.com/en-ke/",
			title: "Kenya Airways",
			width: "80%",
		},
		{
			image: image.partners.media.image5,
			link: "https://kiss100.co.ke/",
			title: "Kiss",
			width: "70%",
		},
		{
			image: image.partners.media.image4,
			link: "https://classic105.com/",
			title: "Classic",
			width: "70%",
		},
		{
			image: image.partners.media.image2,
			link: "https://eastfm.com/",
			title: "East",
			width: "70%",
		},
		{
			image: image.partners.media.image1,
			link: "https://mpasho.co.ke/",
			title: "Mpasho",
			width: "80%",
		},
		{
			image: image.partners.media.image3,
			link: "https://intranet.radioafricagroup.co.ke/about-us/",
			title: "Radio Africa Events",
			width: "30%",
		},
		{
			image: image.partners.media.image6,
			link: "https://ticketyetu.com/",
			title: "Ticket Yetu",
			width: "50%",
		},
		{
			image:
				colorScheme == "dark"
					? image.brand.dronespace.white.portrait.full
					: image.brand.dronespace.original.portrait.full,
			link: "https://dronespace.co.ke/",
			title: "Drone Space",
			width: "50%",
		},
		{
			image: colorScheme == "dark" ? image.partners.media.image7 : null,
			link: "https://startinev.com/",
			title: "Startinev",
			width: "70%",
		},
		{
			image: image.partners.media.image9,
			link: "http://www.thearcrayon.com/",
			title: "Arcrayon",
			width: "70%",
		},
		{
			image: image.partners.media.image11,
			link: "https://www.fahariaviation.com/",
			title: "Fahari Aviation",
			width: "80%",
		},
		{
			image: image.partners.media.image12,
			link: "https://www.theafricablockchaincenter.com/",
			title: "Africa Blockchain Center",
			width: "70%",
		},
		{
			image: image.partners.media.image13,
			link: "https://www.adanianlabs.io/",
			title: "Adanian Labs",
			width: "70%",
		},
	];

	const slides = partners
		.concat(partners)
		.concat(partners)
		.map(
			item =>
				item.image && (
					<Carousel.Slide key={Math.random()}>
						<AspectRatio ratio={2 / 1}>
							<Box w={item.width} mx={"auto"} component="a" href={item.link} target="_blank">
								<Image src={item.image} alt={item.title} w={"100%"} loading="lazy" />
							</Box>
						</AspectRatio>
					</Carousel.Slide>
				)
		);

	return (
		<Carousel
			loop={true}
			slidesToScroll={1}
			slideGap={"xl"}
			withIndicators={false}
			withControls={false}
			plugins={[autoplay.current]}
			slideSize={{ base: "50%", xs: "25%", sm: "33%", md: "16.67%", lg: "14.28%" }}
			// onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
