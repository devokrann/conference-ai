import React from "react";

import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import "@/styles/global.scss";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { SpeedInsights } from "@vercel/speed-insights/next";

import projectName from "@/theme";

import contact from "@/data/contact";

import AffixTheme from "@/components/affixi/Theme";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: { default: `${contact.name.app}`, template: `%s - ${contact.name.app}` },
	description:
		"The AI conference in Nairobi is a cutting-edge conference that will bring together thought leaders, innovators, and enthusiasts in the fields of Artificial Intelligence, Drone Technology, and Data Analytics. The event aims to explore the synergies between these rapidly evolving technologies, fostering collaboration, and inspiring the next wave of breakthroughs.",
};

export default async function App({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-mantine-color-scheme="light">
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
			</head>
			<body /* className={inter.className} */>
				<SpeedInsights />

				<MantineProvider
					theme={projectName}
					defaultColorScheme="light"
					classNamesPrefix="next-template"
					withStaticClasses={false}
					withGlobalClasses={true}
				>
					<Notifications limit={3} />

					<ModalsProvider>
						<AffixTheme />
						{children}
					</ModalsProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
