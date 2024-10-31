import type { Meta, StoryObj } from "@storybook/react";

import { RichLink } from "./RichLink";

const meta: Meta<typeof RichLink> = {
  title: "Components/RichLink",
  component: RichLink,
};

export default meta;

type Story = StoryObj<typeof RichLink>;

export const Default: Story = {
  args: {
    richLink: {
      name: "Twitter",
      label: "@twitter",
      url: "https://twitter.com",
      type: "twitter",
    },
  },
};
