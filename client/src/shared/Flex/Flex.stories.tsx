import React from "react";
import { Story } from "@storybook/react";

import { ThemeWrapper } from "../Theme";
import { Flex } from ".";

export default {
  title: "Shared / Flex",
};

export const Row: Story = () => {
  return (
    <ThemeWrapper>
      <Flex container gutter={4} alignItems="center">
        <Flex
          item
          size={6}
          sm={{ size: 8 }}
          md={{ size: 6 }}
          lg={{ size: 5 }}
          xl={{ size: 4 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, laudantium nulla. Quis doloremque nesciunt omnis
          blanditiis est tempora tempore eos. Quis doloremque nesciunt omnis
          blanditiis est tempora tempore eos.
        </Flex>
        <Flex
          item
          hidden={false}
          size={3}
          sm={{ hidden: true }}
          md={{ size: 3, hidden: false }}
          lg={{ size: 4 }}
          xl={{ size: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          mollitia.
        </Flex>
        <Flex
          item
          size={3}
          sm={{ size: 4 }}
          md={{ size: 3 }}
          lg={{ size: 3 }}
          xl={{ size: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          mollitia.
        </Flex>
      </Flex>
    </ThemeWrapper>
  );
};

export const Column: Story = () => {
  return (
    <ThemeWrapper>
      <Flex container direction="column" gutter={4}>
        <Flex item size={6}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, laudantium nulla. Quis doloremque nesciunt omnis
          blanditiis est tempora tempore eos.
        </Flex>
        <Flex item size={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          mollitia.
        </Flex>
        <Flex item size={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          mollitia.
        </Flex>
      </Flex>
    </ThemeWrapper>
  );
};
