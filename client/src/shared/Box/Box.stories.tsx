import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Box } from ".";

export default {
  title: "Shared / Box",
};

export const Default: Story = () => {
  return (
    <ThemeWrapper>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet.
      </div>
      <Box pt={4} pb={4} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet.
      </div>
      <Box pt="22px" pb="22px" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet.
      </div>
      <Box pt={4}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        optio!
      </Box>
    </ThemeWrapper>
  );
};
