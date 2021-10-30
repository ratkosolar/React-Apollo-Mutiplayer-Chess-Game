import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Typography } from ".";

export default {
  title: "Shared / Typography",
};

export const All: Story = () => {
  return (
    <ThemeWrapper>
      <Typography type="h1" as="h1" color={(c) => c.secondary.default}>
        Heading 1
      </Typography>
      <Typography type="h2" as="h2">
        Heading 2
      </Typography>
      <Typography type="h3" as="h3">
        Heading 3
      </Typography>
      <Typography type="h4" as="h4">
        Heading 4
      </Typography>
      <Typography type="h5" as="h5">
        Heading 5
      </Typography>
      <Typography type="h6" as="h6">
        Heading 6
      </Typography>
      <Typography type="body" as="p">
        Body
      </Typography>
      <Typography type="big" as="p">
        Big
      </Typography>
      <Typography type="small" as="p">
        Small
      </Typography>
      <Typography type="strong" as="p">
        Strong
      </Typography>
    </ThemeWrapper>
  );
};
