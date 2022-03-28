import icons from "../Icons";
import { projectData } from "./Project";

export const ProjectValues: Array<projectData> = [
	{
		title: "Meta Message",
		description: `Meta Message is an app that allows direct, end-to-end encrypted conversation between 
					two Solana wallet addresses. It is able to offer a new level of security through a disconnect
					between the messsage being sent and key value store.`,
		mockup: "/portfolio/metamessage.webp",
		alt: "Meta Message App",
		buttonText: "View on Vercel",
		link: "https://meta-message-f1uod8qkp-azatvaliev.vercel.app/welcome",
		icons: [icons.react, icons.next, icons.ts, icons.cypress, icons.tailwind, icons.node, icons.redis, icons.solana],
		github: "https://github.com/azvaliev/MetaMessage",
		mobileImg: true,
		preload: true
	},
	{
		title: "Tri Cities Lawn & Irrigation",
		description: `Tri Cities Lawn & Irrigation is a local service based business in Pasco, WA. The owner,
		Rudy wanted to establish a cleaner online prescence to draw in local potential clients searching and showcase his work.
		Within a few days of going online, Rudy had recieved several new high ticket prospective clients through the site and
		it continues to perform.`,
		mockup: "/portfolio/tclawnirrigation.webp",
		alt: "Tri Cities Lawn & Irrigaton",
		buttonText: "Check it out",
		link: "https://tclawnirrigation.com",
		icons: [icons.react, icons.html, icons.css, icons.js, icons.aws],
		left: true,
	},
	{
		title: "Enhanced CEO",
		description: `Enhanced CEO is website to offer my coaching services with productivity & cognitive enhancement.
						After helping out my friends with supplement stacks for everything from hangovers and presentation days
						to exams and hearing all the good feedback, I decided to launch this as a service.`,
		mockup: "/portfolio/enhancedceo.webp",
		alt: "Enhanced CEO Coaching Website",
		buttonText: "Check it out",
		link: "https://enhancedceo.com",
		icons: [icons.next, icons.react, icons.ts, icons.tailwind, icons.html, icons.css, icons.js, icons.aws],
		mobileImg: true,
	},
	{
		title: "Python Call Spread Analysis",
		description: `Algorithmic trading remains all the talk, and for good reason. This side project of mine works with the TD
					Ameritrade API to retrieve data about option spreads for a given stock and provide strategies based on target price & other factor.
					I plan on combining a more complete version of this with an automated DCF (Discounted Cash Flow) app I am also writing`,
		mockup: "/portfolio/spreads.webp",
		alt: "Options call spread analysis in Python",
		github: "https://github.com/azvaliev/spreadanalysis",
		icons: [icons.python, icons.git, icons.github, icons.td],
		left: true,
	},
];