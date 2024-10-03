import images from "@/assets/images";

const links = {
	social: [
		{
			icon: image.icon.social.facebook,
			link: "https://www.facebook.com/profile.php?id=61555858636752&mibextid=ZbWKwL",
		},
		{
			icon: image.icon.social.twitter,
			link: "https://x.com/aiconference_ke?t=vH9rLLLgruVtU64zJy34vA&s=09",
		},
		{
			icon: image.icon.social.instagram,
			link: "https://www.instagram.com/aiconference_ke?igsh=cjRheXZzdDc1N2Fw",
		},
		{
			icon: image.icon.social.linkedin,
			link: "https://www.linkedin.com/showcase/aiconference-nairobi/?viewAsMember=true",
		},
	],
	navbar: [
		{ link: "/", label: "Overview" },
		{ link: "/exhibit", label: "Exhibit" },
		{
			link: "/program",
			label: "Program",
		},
		{ link: "/speakers", label: "Speakers" },
		{ link: "/sponsors", label: "Sponsorship" },
		{ link: "/gallery", label: "Gallery" },
	],
	footer: [
		{
			title: "Useful Links",
			links: [
				{ link: "/sponsors", label: "Sponsorship Opportunities" },
				{ link: "/exhibit", label: "Exhibiting & Booths" },
				{ link: "/", label: "Event Overview" },
				{ link: "/program", label: "Event Program" },
				{ link: "/speakers", label: "Speakers" },
			],
		},
		{
			title: "Contact",
			links: [
				{
					link: "https://www.google.com/maps/place/Prosperity+House,+Nairobi/@-1.2723743,36.8091986,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17307ceb423b:0x2b6f26cf176c4f6f!8m2!3d-1.2723743!4d36.8117789!16s%2Fg%2F12hlt4d1k?entry=ttu",
					label: "Prosperity House, Westlands",
				},
				{
					link: "mailto:info@aiconference.co.ke",
					label: "info@aiconference.co.ke",
				},
				{
					link: "tel:+254-712-656565",
					label: "+254-712-656565",
				},
			],
		},
	],
};

export default links;
