module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			md: "768px",
		},
		colors: {
			white: "#ffffff",
			gray: "#AEAEAE",
			blue: "#5caadf",
			transparent: "transparent",
		},
		spacing: {
			"8px": "0.8rem",
			"14px": "1.4rem",
			"20px": "2rem",
			"24px": "2.4rem",
			"45px": "4.5rem",
			"50px": "5rem",
			"60px": "6rem",
			"82px": "8.2rem",
			"115px": "11.5rem",
			"100vh": "100vh",
			full: "100%",
		},
		maxWidth: {
			"540px": "54rem",
		},

		fontSize: {
			"20px": "2rem",
			"24px": "2.4rem",
		},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss/nesting")(require("postcss-nesting")),
		require("autoprefixer"),
	],
};
