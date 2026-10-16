export const DATA = {
	name: "Sameer Choubey",
	initials: "SC",
	url: "https://choubey.eu",
	location: "Bengaluru, India",
	locationLink: "https://www.google.com/maps/place/bengaluru",
	description: "I love building cool and experimental things.",
	avatarUrl: "/portrait.png",
	resumeUrl: "/resume.pdf",
	hero: {
		lead: "Full stack by habit. I build the part of the product people actually touch, then go as deep into the stack as it takes to make it hold up.",
	},
	about: {
		headline: "I'm Sameer Choubey, a frontend-focused full stack engineer. I care about the interface first, and I'll own whatever sits behind it.",
		paragraphs: [
			"Currently at Confido Health, building the frontend of a healthcare platform. Before that, Emergent Labs, three-plus years at Juno Finance, and a master's in Software Engineering in Berlin that took me from Bengaluru to Germany and back.",
			"Off the clock I ship small products of my own: Vaulzo, a net-worth tracker, and Schreibe, a writing tool. Experiments that turned into things people open every day.",
		],
		travel: {
			pull: "I've been chasing new cities for as long as I've been writing code. Berlin just put a train station at my doorstep.",
			body: "A croissant still warm from a Paris bakery, a slice eaten standing up in Milan, an afternoon inside the Colosseum in Rome wondering how it's still standing. I travel the way I build: curious first, with a plan that's allowed to change.",
			countries: 32,
		},
	},
	// "The path so far" timeline in the hero, oldest first; the last entry is current
	path: [
		{ when: "Aug'17 — Jun'21", name: "NIT Sikkim", role: "B.Tech, Electronics & Communication", place: "SIKKIM, IN · ON CAMPUS" },
		{ when: "Nov'20 — Feb'24", name: "Juno Finance", role: "Software Development Engineer", place: "BENGALURU, IN · FULL TIME" },
		{ when: "Mar'24 — Feb'25", name: "University of Europe, Berlin", role: "M.Sc. Software Engineering", place: "BERLIN, DE · ON CAMPUS" },
		{ when: "Aug'25 — Oct'25", name: "Emergent Labs", role: "Software Engineer", place: "BENGALURU, IN · FULL TIME" },
		{ when: "Oct'25 — Now", name: "Confido Health", role: "Senior Frontend Engineer", place: "BENGALURU, IN · FULL TIME" },
	],
	contact: {
		email: "sameer@choubey.eu",
		tel: "+4915140138685",
		social: {
			GitHub: {
				name: "GitHub",
				url: "http://github.com/sameerchoubey/",
			},
			X: {
				name: "X",
				url: "https://x.com/DSameerChoubey",
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/sameerchoubey",
			},
		},
	},
	work: [
		{
			id: "confido-1",
			company: "Confido Health",
			href: "https://confido.health/",
			location: "Bengaluru",
			title: "Senior Frontend Engineer",
			type: "Full time",
			logoUrl: "/confido.png",
			start: "Oct 2025",
			end: null,
			blurb: "Platform team: a Vite + React 19 Module Federation platform serving 61 clinic deployments from one repo, 12+ product surfaces migrated into 44 federated modules, and a GitLab CI fanout that keeps 61 forks in sync.",
			stack: ["TypeScript", "React", "Next"],
			description: [
				"Architected a Vite 6 + React 19 Module Federation platform serving 61 clinic deployments from one repo.",
				"Migrated 12+ product surfaces from a monolith into 44 federated modules with registry-driven routing.",
				"Built a GitLab CI/CD fanout pipeline that auto-merges sync MRs across 61 forked repos at 89% success.",
				"Designed a three-tier module ownership model with CODEOWNERS, letting product engineers ship unblocked.",
				"Replaced tag-based versioning with git tree-membership fork detection, retiring three legacy tools."
			]
		},
		{
			id: "emergent-1",
			company: "Emergent Labs",
			href: "https://app.emergent.sh/",
			location: "Bengaluru",
			title: "Software Engineer",
			type: "Full time",
			logoUrl: "/emergent.png",
			start: "Aug 2025",
			end: "Oct 2025",
			blurb: "Real-time notifications with Pusher, Google One Tap auth over Supabase, and a landing page tuned for speed.",
			stack: ["TypeScript", "React"],
			description: [
				"Integrated Pusher for real-time web notifications, enabling instant updates for users on the platform.",
				"Designed and optimised the landing page using lazy loading, code splitting, and WebP image optimisation.",
				"Integrated Google One Tap authentication with OAuth 2.0 flows through Supabase Auth.",
				"Developed collaborative teams feature with real-time synchronisation and role-based access control (RBAC)."
			]
		},
		{
			id: "juno-2",
			company: "Juno Finance",
			href: "https://juno.finance",
			location: "Bengaluru",
			title: "Software Development Engineer",
			type: "Full time",
			logoUrl: "/juno.png",
			start: "Nov 2020",
			end: "Feb 2024",
			blurb: "Three years of consumer fintech: NFT auctions with self-custodial wallets, 2FA, and lazy hydration that cut load time by 40%.",
			stack: ["Vue", "Nuxt", "Node", "MongoDB"],
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
				"Co-developed a customized CRM tool, increasing query resolution by 25% and response time by 20%.",
				"Implemented features for card issuance and address updates, increasing user retention by 30%.",
				"Managed MongoDB query development and optimization using Metabase for the growth and analytics team."
			]
		},
		// {
		// 	id: "juno-1",
		// 	company: "Juno Finance",
		// 	href: "https://juno.finance",
		// 	badges: [],
		// 	location: "Remote",
		// 	title: "Software Engineering Intern",
		// 	logoUrl: "/juno.png",
		// 	start: "Nov 2020",
		// 	end: "April 2021",
		// 	description: [
		// 		"Co-developed a customized CRM tool, increasing query resolution by 25% and response time by 20%.",
		// 		"Implemented features for card issuance and address updates, increasing user retention by 30%.",
		// 		"Managed MongoDB query development and optimization using Metabase for the growth and analytics team."
		// 	]
		// },
		// {
		// 	id: "moodcafe",
		// 	company: "Moodcafe",
		// 	href: null,
		// 	location: "Ahmedabad",
		// 	title: "Frontend Developer Intern",
		// 	type: null,
		// 	logoUrl: "/moodcafe.jpeg",
		// 	start: "Jan 2019",
		// 	end: "Feb 2019",
		// 	blurb: "Redesigned the site and built the landing page, self-help section, expert profiles and anonymous chat.",
		// 	stack: ["JavaScript"],
		// 	description: [
		// 		"Redesigned the Moodcare website to improve user experience and visual appeal",
		// 		"Developed and implemented key features for the landing page, self-help section, expert profiles, and anonymous chat functionality.",
		// 		"Collaborated with design and backend teams to deliver user-centric solutions aligned with Moodcare’s mission.",
		// 		"Optimized website performance for faster load times, cross-browser compatibility, and accessibility."
		// 	]
		// },
	],
	projects: [
		{
			title: "Vaulzo",
			href: "https://wealth.choubey.eu",
			year: "2025",
			kind: "Product",
			status: "LIVE",
			tagline: "Your net worth, one snapshot at a time.",
			description: "A simple wealth tracker that captures periodic snapshots and shows how they change over time with clear graphs.",
			technologies: ["Next.js", "MongoDB", "Python", "Tailwind"],
			image: "/vaulzo.png",
		},
		{
			title: "Schreibe",
			href: "https://schreibe.choubey.eu",
			year: "2025",
			kind: "Tool",
			status: "AVAILABLE",
			tagline: "Your words. One entry at a time.",
			description: "A lightweight writing environment designed for focus: keyboard shortcuts, markdown, no clutter.",
			technologies: ["Next.js", "Postgres", "Prisma", "shadcn"],
			image: "/schreibe.png",
		},
	],
	toolbox: [
		{ group: "FRONTEND", items: ["Vue", "Nuxt.js", "React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
		{ group: "BACKEND", items: ["Node.js", "Express", "Postgres", "MySQL", "MongoDB"] },
		{ group: "INFRA & OTHER", items: ["Docker", "Git"] },
		{ group: "EDUCATION", items: ["M.Sc. UE Berlin", "B.Tech NIT Sikkim"] },
	],
} as const;
