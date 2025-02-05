import { View } from "react-native";
import "./mock"

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  // Set up the global theme toolbar in Storybook
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "light",  // Default to 'light' theme
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"], // Allow the user to toggle between light and dark
        showName: true,
      },
    },
  },

  decorators: [
	(Story, context) => {
	  console.log('Current Theme:', context.globals.theme); // Log the current theme
	  const backgroundColor = context.globals.theme === "dark" ? "#333" : "#fff";
	  return (
		<View style={{ flex: 1, backgroundColor, padding: 20 }}>
		  <Story />
		</View>
	  );
	},
  ],
};

export default preview;
