import React from "react";

import { Affix, Box, Transition } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";

import Partial from "@/partials";

export default function Navbar() {
	const [scroll] = useWindowScroll();
	const touch = useMediaQuery("(max-width: 62em)");

	return (
		<Affix position={{ left: 0, top: 0, right: 0 }}>
			<Transition transition="slide-down" mounted={!touch && scroll.y > 120}>
				{transitionStyles => (
					<Box style={transitionStyles}>
						<Partial.Navbar.Main />
					</Box>
				)}
			</Transition>
		</Affix>
	);
}
