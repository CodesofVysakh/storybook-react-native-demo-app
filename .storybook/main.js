/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    // "@storybook/addon-actions",  // Use the classic actions addon

  ],
};
