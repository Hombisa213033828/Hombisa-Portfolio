/** @ type {import('@storybook/react-webpack5').StorybookConfig}**/
const config = {
    stories: ["../**/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addons-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;