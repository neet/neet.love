import type { Meta, StoryObj } from "@storybook/react";

import { ContactCard } from "./ContactCard";

const meta: Meta<typeof ContactCard> = {
  title: "Components/ContactCard",
  component: ContactCard,
};

export default meta;

type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {
  args: {
    contact: {
      name: "Twitter",
      label: "@twitter",
      url: "https://twitter.com",
      type: "twitter",
    },
  },
};
