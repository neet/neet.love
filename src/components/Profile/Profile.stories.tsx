import type { Meta } from "@storybook/react";

import { Profile } from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
};

export default meta;

export const Default = () => <Profile />;
