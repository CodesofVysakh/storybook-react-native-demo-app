export default ({ config }) => ({
    ...config,
    name: "Storybook Tutorial Template",
    slug: "storybook-tutorial-template",
    extra: {
        storybookEnabled: "true"
    },
	// extra: {
	// 	storybookEnabled: process.env.EXPO_STORYBOOK,
	// },
});
