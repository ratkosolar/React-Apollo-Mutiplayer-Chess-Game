import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Container } from ".";
import { Typography } from "../Typography";

export default {
  title: "Shared / Container",
};

export const Default: Story = () => {
  return (
    <ThemeWrapper>
      <Container>
        <Typography type="h1" as="h1">
          This is a container
        </Typography>
        <Typography type="body" as="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          reiciendis magnam numquam maxime error sit, ipsum saepe quia repellat
          dolor!
        </Typography>
      </Container>
    </ThemeWrapper>
  );
};

export const FullHeight: Story = () => {
  return (
    <ThemeWrapper>
      <Container fullHeight>
        <Typography type="h1" as="h1">
          This is a container
        </Typography>
        <Typography type="body" as="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          reiciendis magnam numquam maxime error sit, ipsum saepe quia repellat
          dolor!
        </Typography>
      </Container>
    </ThemeWrapper>
  );
};
