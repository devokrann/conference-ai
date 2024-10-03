import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
	Group,
	Burger,
	Box,
	Container,
	Drawer,
	Stack,
	Grid,
	ButtonGroup,
	Button,
	Image,
	Menu,
	Center,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import classes from "./Main.module.scss";
import "./link.scss";
import image from "@src/assets/images";
import data from "@src/data";
import { IconChevronDown } from "@tabler/icons-react";

export default function Main() {
	const [opened, { open, close }] = useDisclosure(false);

	const anchors = data.links.navbar.map(link => {
		const menuItems = link.subLinks?.map(subLink => (
			<Menu.Item key={subLink.link}>
				<NavLink to={subLink.link} className={classes.link}>
					{subLink.label}
				</NavLink>
			</Menu.Item>
		));

		if (!menuItems) {
			return (
				<NavLink key={link.label} to={link.link} className={classes.link}>
					{link.label}
				</NavLink>
			);
		} else {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					closeDelay={50}
					openDelay={50}
					withinPortal
					classNames={{
						dropdown: classes.menuDropdown,
						item: classes.menuItem,
						itemLabel: classes.menuItemLabel,
					}}
				>
					<Menu.Target>
						<NavLink to={link.link} className={classes.link} onClick={e => e.preventDefault()}>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size="0.9rem" stroke={1.5} />
							</Center>
						</NavLink>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}
	});

	const cta = (
		<ButtonGroup>
			<Button fullWidth variant="outline" color="sec" component={Link} to={"/registration/booths"}>
				Booths
			</Button>
			<Button fullWidth color="sec" c={"dark.9"} component={Link} to={"/registration/tickets"}>
				Tickets
			</Button>
		</ButtonGroup>
	);

	return (
		<Box className={classes.box}>
			<Container>
				<Grid align="center" gutter={0}>
					<Grid.Col span={{ base: 9, md: 3 }}>
						<Box w={200}>
							<Link to={"/"}>
								<Image src={image.brand.landscape} alt="Logo" w={"100%"} />
							</Link>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ md: 9 }} visibleFrom="md">
						<Group justify="end" gap={"xl"}>
							{anchors}
						</Group>
					</Grid.Col>
					{/* <Grid.Col span={{ md: 3 }} visibleFrom="md">
						<Group justify="end">{cta}</Group>
					</Grid.Col> */}
					<Grid.Col span={3} hiddenFrom="md">
						<Group justify="end" gap={0}>
							<Burger opened={opened} onClick={open} size="sm	" aria-label="toggle navigation" />
						</Group>
					</Grid.Col>
				</Grid>

				<Drawer
					opened={opened}
					onClose={close}
					withCloseButton={false}
					size={240}
					classNames={{ content: classes.drawerBody }}
				>
					<Stack>
						<Stack gap={0}>{anchors}</Stack>
						{cta}
					</Stack>
				</Drawer>
			</Container>
		</Box>
	);
}
