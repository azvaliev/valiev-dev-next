import icons from "../Icons";

export interface Icon {
	img: string;
	alt: string;
	priority?: boolean;
}

export interface TimelinePoint {
	title: string;
	description: string;
	date: string;
	buttonText: string;
	buttonLink: string;
	internalLink?: boolean;
	icons: Array<Icon>;
	pos: string;
	left?: boolean;
	current?: boolean;
}

export const standardPos = "12%";

export const TimelineData: Array<TimelinePoint> = [
	{
		title: "A Developer is Born",
		description:
			"I began my venture into the world of programming with Native Android Development, Udemy, and Youtube tutorials",
		date: "Late 2015",
		buttonText: "View My Apps",
		buttonLink:
			"https://play.google.com/store/apps/dev?id=5613471573391791221",
		icons: [icons.java, icons.android, icons.xml],
		pos: "0",
		left: true,
	},
	{
		title: "First App Released",
		description: `An interest in Cybersecurity led me to release my first app, Wifi Manager. It let users easily see details about network connection, and accumulated several thousand downloads`,
		date: "Mar 2016",
		buttonText: "View on Google Play",
		buttonLink:
			"https://play.google.com/store/apps/details?id=azat.wifimanager",
		icons: [icons.java, icons.android, icons.xml],
		pos: "25%",
	},
	{
		title: "10k+ Downloads",
		description: `I released a soundboard featuring a popular political candidate, which amassed tens of thousands of downloads`,
		date: "Late 2016",
		buttonText: "View on Google Play",
		buttonLink:
			"https://play.google.com/store/apps/dev?id=5613471573391791221",
		icons: [icons.java, icons.android, icons.xml],
		pos: standardPos,
		left: true,
	},
	{
		title: "Getting my feet wet",
		description:
			"Not being able to share my apps with anyone who didn't have Android was a bummer. So I started to explore the web, making a website for my local skate shop",
		date: "Mid 2017",
		buttonText: "Asphalt Assault",
		buttonLink: "https://asphalt-assault.glitch.me",
		icons: [icons.html, icons.css, icons.js],
		pos: standardPos,
	},
	{
		title: "Diving into Web",
		description: `Networking with local developers lead me to land a position with M2 Labs, working on a project that analyzed Git repositories and provided data about contributions`,
		date: "June 2018",
		buttonText: "Letter of Reccomendation",
		buttonLink: "/reccomendation",
		internalLink: true,
		icons: [
			icons.html,
			icons.css,
			icons.js,
			icons.python,
			icons.git,
			icons.linux,
		],
		pos: "15%",
		left: true,
	},
	{
		title: "Freelancing",
		description: `I network with business owners and helped them solve problems with the web using technologies like React & Next JS, Node, Express & MongoDB.`,
		date: "Late 2018",
		current: true,
		buttonText: "View recent projects",
		buttonLink: "https://enhancedceo.com",
		icons: [
			icons.react,
			icons.next,
			icons.ts,
			icons.cypress,
			icons.node,
			icons.python,
			icons.mongodb,
			icons.aws,
		],
		pos: standardPos,
	},
	{
		title: "Web3 Wonders",
		description: `I'm currently working a few Web3 projects, such as a messaging app that allows for highly secure, encrypted communication between Solana addresses`,
		date: "Late 2021",
		current: true,
		buttonText: "Meta Message - WIP",
		buttonLink:
			"https://meta-message-f1uod8qkp-azatvaliev.vercel.app/welcome",
		icons: [
			icons.react,
			icons.next,
			icons.ts,
			icons.cypress,
			icons.tailwind,
			icons.node,
			icons.redis,
			icons.solana,
		],
		pos: standardPos,
		left: true,
	},
];
