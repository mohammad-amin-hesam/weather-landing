const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain =
	process.env.PRODUCTION_DOMAIN || "https://weather-test-86064.web.app";

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				weather: `weather@${domain}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
