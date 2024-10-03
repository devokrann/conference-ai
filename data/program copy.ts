const program = {
	schedule: {
		common: {
			day1: [
				{
					title: {
						duration: "09.00 AM – 09.50 AM",
						heading: "Welcome & Opening Keynote",
					},
					desc: {
						agenda: "Official opening of the expo.",
					},
				},
				{
					title: {
						duration: "09.50 AM – 10.30 AM",
						heading: "Panel Session",
					},
					desc: {
						agenda: "How will AI transform the Future (Man vs AI)?",
					},
				},
				{
					title: {
						duration: "10.30 AM – 11.00 AM",
						heading: "Coffee Break",
					},
					desc: {
						agenda: "Official opening of the expo. Attendees split to respective platforms.",
					},
				},
			],
			day2: [
				{
					title: {
						duration: "01.00 PM – 02.00 PM",
						heading: "Lunch Break",
					},
					desc: {
						agenda: "Lunch break",
					},
				},
				{
					title: {
						duration: "02.00 PM – 02.40 PM",
						heading: "Panel Session",
					},
					desc: {
						agenda: "AI job opportunities.",
					},
				},
				{
					title: {
						duration: "02.40 PM – 03.00 PM",
						heading: "Demonstration Session",
					},
					desc: {
						agenda: "Drone Demonstration using AI and hand gestures.",
					},
				},
				{
					title: {
						duration: "03.00 PM – 03.40 PM",
						heading: "Hackathon Session",
					},
					desc: {
						agenda: "Hackathon pitching and Judging (5 Teams)",
					},
				},
				{
					title: {
						duration: "03.40 PM – 04.00 PM",
						heading: "Coffee Break",
					},
					desc: {
						agenda: "Coffee break",
					},
				},
				{
					title: { duration: "04.00 PM – 04.40 PM", heading: "Hackathon Winner Announcement Session" },
					desc: {
						agenda: "Announcement of hackathon winner.",
					},
				},
				{
					title: { duration: "04.40 PM – 05.00 PM", heading: "Vote of Thanks" },
					desc: {
						agenda: "Official closing of the expo.",
					},
				},
			],
		},
		ai: {
			day1: [
				{
					title: { duration: "11.00 AM – 11.30 AM", heading: "Plenary Session" },
					desc: {
						agenda: "Understanding the Difference between ChatGPT and Microsoft Copilot, and Advantages of Azuri AI.",
					},
				},
				{
					title: { duration: "11.30 AM – 12.10 PM", heading: "Panel Session" },
					desc: {
						agenda: "How will the integration of AI in healthcare manage insurance claims, incorporate patient data from various providers, and facilitate the continuous flow of data for healthcare operations?",
					},
				},
				{
					title: { duration: "12.10 PM – 01.00 PM", heading: "Panel Session" },
					desc: {
						agenda: "Data protection and regulation policy.",
					},
				},
				{
					title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
					desc: {
						agenda: "Lunch Break",
					},
				},
				{
					title: { duration: "02.00 PM – 02.30 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Masterclass on Leveraging on AI Lawfully.",
					},
				},
				{
					title: { duration: "02.30 PM – 03.10 PM", heading: "Panel" },
					desc: {
						agenda: "How can organizations successfully navigate the era of AI powered automation?",
					},
				},
				{
					title: { duration: "03.10 PM – 03.40 PM", heading: "Plenary Session" },
					desc: {
						agenda: "What are the Venture Capitalists/Investors Perspectives on AI?",
					},
				},
				{
					title: { duration: "03.40 PM – 04.00 PM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee Break",
					},
				},
				{
					title: { duration: "04.00PM – 05.00PM", heading: "Panel Session" },
					desc: {
						agenda: "Chatbots for Change: Using Conversational AI to transform rural communities in Kenya?",
					},
				},
			],
			day2: [
				{
					title: { duration: "09.00 AM – 09.40 AM", heading: "Panel Session" },
					desc: {
						agenda: "Exploring data centres in the context of AI",
					},
				},
				{
					title: { duration: "09.40 AM – 10.10 AM", heading: "Panel Session" },
					desc: {
						agenda: "The future with generative AI.",
					},
				},
				{
					title: { duration: "10.10 AM – 10.30 AM", heading: "Plenary Session" },
					desc: {
						agenda: "A data monetization framework for AI.",
					},
				},
				{
					title: { duration: "10:30 AM – 11.00 AM", heading: "Coffee Break" },
					desc: {
						agenda: "Official opening of the expo. Attendees split to various platforms.",
					},
				},
				{
					title: { duration: "11.00 AM – 11:40 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can AI features empower financial institutions stay competitive and provide better services?",
					},
				},
				{
					title: { duration: "11:40 AM – 12.10 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Leveraging AI to monitor, address and prevent fraud (Cyber Security).",
					},
				},
				{
					title: { duration: "12:10 PM – 12.50 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Integration AI for Education.",
					},
				},
			],
		},
		drone: {
			day1: [
				{
					title: { duration: "11.00 AM – 11.50 AM", heading: "Panel Session" },
					desc: {
						agenda: "Drone regulation and policy",
					},
				},
				{
					title: { duration: "11.50 AM – 12.50 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can UTM Systems enhance airspace safety for Unmanned Aircraft Systems (UAS) in Kenya?",
					},
				},
				{
					title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
					desc: {
						agenda: "Lunch Break",
					},
				},
				{
					title: { duration: "02.00 PM – 02.40 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Drones for early detection of pests and diseases.",
					},
				},
				{
					title: { duration: "02.40 PM – 03.20 PM", heading: "Panel Session" },
					desc: {
						agenda: "The journey of a Farmer and the 1st Agricultural Drone to be flown in the United States.",
					},
				},
				{
					title: { duration: "03.20 PM – 03.40 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Precision Farming for high yields.",
					},
				},
				{
					title: { duration: "03.40 PM – 04.00 PM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee Break",
					},
				},
				{
					title: { duration: "04.00 PM – 05.00 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can Drone pilots leverage on Jobs and operations opportunity?",
					},
				},
			],
			day2: [
				{
					title: { duration: "09.00 AM – 09.50 AM", heading: "Panel Session" },
					desc: {
						agenda: "Geospatial professionals using drones for Surveying with Lidar and software.",
					},
				},
				{
					title: { duration: "09.50 AM – 10.30 AM", heading: "Panel Session" },
					desc: {
						agenda: "The safety aspects and lessons learned in Beyond Visual Line of Sight (BVLOS) operations across the continent.",
					},
				},
				{
					title: { duration: "10.30 AM – 11.00 AM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee break.",
					},
				},
				{
					title: { duration: "11.00 AM – 11:50 PM", heading: "Panel Session" },
					desc: {
						agenda: "Drones in Filming",
					},
				},
				{
					title: { duration: "11:50 AM – 12.50 PM", heading: "Panel Session" },
					desc: {
						agenda: "Women in AI and Drone Tech - Are we making progress and inspiring others to grow their career prospects?",
					},
				},
			],
		},
	},
};

export default program;
