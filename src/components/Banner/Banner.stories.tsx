import type { Meta } from "@storybook/react";

import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
};

export default meta;

export const Default = () => <Banner />;
