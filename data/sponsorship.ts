import image from "@src/assets/images";

const sponsorship = {
	packages: [
		{
			title: "Hackathon",
			price: "200,000",
			desc: [
				"Brand visibility",
				"Networking Opportunities with talent",
				"Recognition in event communications",
				"Access to new tech",
				"Thought leadership",
			],
			sold: true,
		},
		{
			title: "5G Wi-Fi",
			price: "500,000",
			desc: [
				"Exclusive sponsorship of event Wi-Fi",
				"Logo on Wi-Fi login pages and materials",
				"Recognition in event communications",
				"Opportunity to provide branded splash pages or login messages",
			],
			sold: true,
		},
		{
			title: "Coffee Break",
			price: "500,000",
			desc: [
				"Exclusive sponsorship of coffee break sessions",
				"Logo on coffee stations and materials",
				"Recognition in event communications",
				"Opportunity to distribute branded materials during coffee breaks",
			],
			sold: true,
		},
		{
			title: "Bronze",
			price: "500,000",
			desc: [
				"Logo placement on event materials, including digital and print",
				"Recognition in press releases and media coverage",
				"Standard exhibit space 3 by 3",
				"Conference pass for 3 pax",
				"Mention in event communications",
				"Access to VIP Coffee Break Area",
			],
			sold: true,
		},
		{
			title: "Silver",
			price: "1,000,000",
			desc: [
				"Logo placement on event materials, including digital and print",
				"Recognition in press releases and media coverage",
				"1 x banner in both the conference and exhibition areas",
				"Exhibit space in the sponsor area 6 by 3",
				"Conference pass for 8 pax",
				"Mention in event communications",
				"Access to VIP Coffee Break Area",
				"Access to event data analytics for post-event analysis",
			],
			sold: true,
		},
		{
			title: "Gold",
			price: "2,500,000",
			desc: [
				"Logo placement on event materials, including digital and print",
				"Recognition in press releases and media coverage",
				"2 x banners in both the conference and exhibition areas",
				"Booth Space in the exhibition area 6 by 3",
				"Conference pass for 10 pax",
				"Mention in keynote or opening remarks",
				"Access to VIP Coffee Break Area",
				"Access to event data analytics for post-event analysis",
			],
			sold: true,
		},
		{
			title: "Platinum",
			price: "4,000,000",
			desc: [
				"High visibility with prominent logo placement on event materials",
				"Recognition in press releases and media coverage",
				"Opportunity to host a workshop or panel discussion on AI, Drone Tech, or Data Analytics",
				"3 x Give aways for panel discussion speakers pack/bag",
				"3 x banners in both the conference and exhibition areas",
				"Booth Space in the exhibition area 9 by 3",
				"Conference Pass for 12 pax",
				"Access to VIP Coffee Break Area",
				"Lanyard Branding of logo",
				"Priority access to event data analytics for post-event analysis",
			],
			sold: true,
		},
		{
			title: "Title",
			price: "6,000,000",
			desc: [
				"Exclusive branding as the title sponsor of the event",
				"Prominent logo placement on all promotional materials, including digital and print",
				"Recognition in press releases and media coverage",
				"Opportunity to deliver a keynote or exclusive presentation (15 mins)",
				"5 x Give aways for panel discussion speakers pack/bag",
				"5 x banners in both the conference and exhibition areas",
				"Booth Space in the exhibition area 12 by 3",
				"Conference Pass for 15 pax",
				"Access to VIP Coffee Break Area",
				"Lanyard Branding of logo",
				"Exclusive access to event data analytics for post-event analysis",
			],
			sold: true,
		},
	],
	sponsors: [
		{
			name: "Safaricom",
			image: image.partners.media.image10,
			width: "70%",
		},
		{
			name: "Kenya Airways",
			image: image.partners.media.image14,
			width: "80%",
		},
		{
			name: "Fahari Abviation",
			image: image.partners.media.image11,
			width: "70%",
		},
		{
			name: "Wapi Pay",
			image: image.companies.wapiPay,
			width: "70%",
		},
	],
};

export default sponsorship;
