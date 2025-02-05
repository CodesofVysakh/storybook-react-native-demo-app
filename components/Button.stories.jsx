import React from "react";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";  // Classic import

import Button from "./Button";  // Assuming Button is a separate component

export default {
  component: Button,
  title: "Button",
  decorators: [
    (Story) => (
      <View style={{ padding: 20, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    onPress: { action: "button-clicked" },  // Action to trigger on button click
  },
};

// Default is the named export for the story
export const Default = (args) => {
  console.log("args in Default:", args);  // Check if args are coming through
  return <Button {...args} onPress={action("onPress")} />;  // Use action directly
};

Default.args = {
  label: "Click Me",
  backgroundColor: "blue",
};
