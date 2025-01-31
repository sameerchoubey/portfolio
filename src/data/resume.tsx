import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Sameer Choubey",
	initials: "SC",
	url: "https://choubey.eu",
	location: "Berlin, Germany",
	locationLink: "https://www.google.com/maps/place/berlin",
	description: "I love building cool and experimental things.",
	summary: "I am a software engineer with experience at **high-growth startups in India**, where I developed scalable solutions and thrived in **fast-paced, high-growth, and innovative environments**. I recently completed my **Masters in Computer Science from Berlin**, and I am now seeking **full-time roles in Europe** to contribute to impactful projects and grow within the tech industry. I also hold an **engineering degree from NIT Sikkim, India**, which laid the foundation for my technical expertise and problem-solving skills.",
	avatarUrl: "/me.png",
	skills: [
		"Vue",
		"Nuxt.js",
		"React",
		"Next.js",
		"Javascript",
		"Typescript",
		"Node.js",
		"Postgres",
		"Mongo",
		"Docker",
		"C++",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "sameer@choubey.eu",
		tel: "+4915140138685",
		social: {
			GitHub: {
				name: "GitHub",
				url: "http://github.com/sameerchoubey/",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/sameerchoubey",
				icon: Icons.linkedin,
				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/DSameerChoubey",
				icon: Icons.x,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,
				navbar: false,
			},
		},
	},
	work: [
		{
			company: "Juno Finance",
			href: "https://juno.finance",
			badges: [],
			location: "Bengaluru, India",
			title: "Software Development Engineer",
			logoUrl: "/juno.png",
			start: "June 2021",
			end: "Feb 2024",
			description: [
				"Migrated from the Google Sign-In JS library to Google Identity, integrating Google One Tap for better UX.",
				"Enhanced the Onfido Motion, enabling motion capture for improving security and user verification. ",
				"Developed the JCOIN Maps landing page to showcase cities where Juno Points were earned using a 3D globe.",
				"Added functionality for users to purchase cryptocurrency with credit cards by integrating TabaPay.",
				"Implemented NFT Auctions, allowing users to bid for NFTs using self-custodial wallets like Metamask or Zengo.",
				"Led the development and optimization of the Account & Card Activation Flow feature.",
				"Developed the Juno Store transactions section to handle various transactions in light & dark modes for redemptions.",
				"Contributed to the development and enhancement of buy, sell, and send crypto flows across multiple iterations.",
				"Implemented lazy hydrating techniques that resulted in a 40% reduction in the loading time.",
				"Developed and implemented two-factor authentication to enhance user security.",
				"Migrated from the Google Sign-In JS library to Google Identity, integrating Google One Tap for better UX.",
				"Enhanced the Onfido Motion, enabling motion capture for improving security and user verification.",
				"Developed the JCOIN Maps landing page to showcase cities where Juno Points were earned using a 3D globe.",
				"Added functionality for users to purchase cryptocurrency with credit cards by integrating TabaPay.",
				"Implemented NFT Auctions, allowing users to bid for NFTs using self-custodial wallets like Metamask or Zengo.",
				"Led the development and optimization of the Account & Card Activation Flow feature.",
				"Developed the Juno Store transactions section to handle various transactions in light & dark modes for redemptions.",
				"Contributed to the development and enhancement of buy, sell, and send crypto flows across multiple iterations.",
				"Implemented lazy hydrating techniques that resulted in a 40% reduction in the loading time.",
				"Developed and implemented two-factor authentication to enhance user security."
			]
		},
		{
			company: "Juno Finance",
			href: "https://juno.finance",
			badges: [],
			location: "Remote",
			title: "Software Engineering Intern",
			logoUrl: "/juno.png",
			start: "Nov 2020",
			end: "April 2021",
			description: [
				"Co-developed a customized CRM tool, increasing query resolution by 25% and response time by 20%.",
				"Implemented features for card issuance and address updates, increasing user retention by 30%.",
				"Managed MongoDB query development and optimization using Metabase for the growth and analytics team."
			]
		},
		{
			company: "Moodcafe",
			badges: [],
			location: "Ahmedabad, India",
			title: "Frontend Developer Intern",
			logoUrl: "/moodcafe.jpeg",
			start: "Jan 2019",
			end: "Feb 2019",
			description: [
				"Redesigned the Moodcare website to improve user experience and visual appeal",
				"Developed and implemented key features for the landing page, self-help section, expert profiles, and anonymous chat functionality.",
				"Collaborated with design and backend teams to deliver user-centric solutions aligned with Moodcare’s mission.",
				"Optimized website performance for faster load times, cross-browser compatibility, and accessibility."
			]
		},
	],
	education: [
		{
			school: "University of Europe for Applied Sciences",
			href: "https://www.ue-germany.com",
			degree: "Software Engineering, M.Sc",
			logoUrl: "/ue.jpg",
			start: "March 2024",
			end: "Feb 2025",
			location: "Berlin, Germany"
		},
		{
			school: "National Institute of Technology Sikkim",
			href: "https://nitsikkim.ac.in",
			degree: "Electronics & Communication Engineering, B.Tech",
			logoUrl: "/nitsikkim.png",
			start: "August 2017",
			end: "May 2021",
			location: "Sikkim, India"
		}
	]
} as const;
