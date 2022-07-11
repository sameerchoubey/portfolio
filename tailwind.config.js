module.exports = {
	darkMode: "class",
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		screens: {
			xs: "0px",
			xm:"321px",
			sm: "414px",
			nexus: "560px",
			md: "720px",
			ipad: "768px",
			ipadMid: "896px",
			ipadPro: "1024px",
			lg: "1280px",
			xl: "1920px"
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
