import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {}
	},
	staticDirs: ["../public"],
	// webpackFinal: async (config) => {
		// Handle SCSS files
		// config?.module?.rules?.push({
		// 	test: /\.scss$/,
		// 	use: ['style-loader', 'css-loader', 'sass-loader'],
		// 	include: /src/,
		// });

		// Handle CSS files
		// config?.module?.rules?.push({
		// 	test: /\.css$/,
		// 	use: [
		// 		'style-loader',
		// 		'css-loader',
		// 		'postcss-loader',
		// 	],
		// 	include: /src/,
		// });

	// 	return config;
	// },
}
export default config
