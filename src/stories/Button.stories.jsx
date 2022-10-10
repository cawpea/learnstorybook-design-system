import React from "react";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button } from "./Button";
import { StoryLinkWrapper } from "./StoryLinkWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const WithInteractions = (args) => <Button {...args} />;
WithInteractions.args = {
  appearance: "primary",
  href: "https://storybook.js.org",
  ButtonWrapper: StoryLinkWrapper,
  children: "Button",
};

WithInteractions.play = async ({ canvasElement }) => {
  // Assign canvas to the component root element
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  expect(canvas.getByRole("button")).toHaveAttribute(
    "href",
    "https://storybook.js.org"
  );
};
