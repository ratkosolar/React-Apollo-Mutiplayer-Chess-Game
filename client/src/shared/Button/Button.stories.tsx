import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Button } from ".";

export default {
  title: "Shared / Button",
};

export const Primary: Story = () => {
  return (
    <ThemeWrapper>
      <Button variant="primary">This is a button</Button>
    </ThemeWrapper>
  );
};

export const Secondary: Story = () => {
  return (
    <ThemeWrapper>
      <Button variant="secondary">This is a button</Button>
    </ThemeWrapper>
  );
};

export const Small: Story = () => {
  return (
    <ThemeWrapper>
      <Button variant="primary" size="sm">
        This is a small button
      </Button>
    </ThemeWrapper>
  );
};

export const Large: Story = () => {
  return (
    <ThemeWrapper>
      <Button variant="primary" size="lg">
        This is a large button
      </Button>
    </ThemeWrapper>
  );
};

export const FullWidth: Story = () => {
  return (
    <ThemeWrapper>
      <Button variant="primary" fullWidth>
        This is a full width button
      </Button>
    </ThemeWrapper>
  );
};
