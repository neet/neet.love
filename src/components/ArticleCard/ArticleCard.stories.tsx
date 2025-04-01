import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Components/ArticleCard",
  component: ArticleCard,
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    blog: {
      id: "1",
      lang: ["en"],
      title: "Hello world",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eyecatch: {
        url: "https://picsum.photos/200/300",
        width: 200,
        height: 300,
      },
      hashtags: [
        {
          id: "1",
          title: "tag1",
        },
      ],

      createdAt: new Date("2021-01-01").toISOString(),
      updatedAt: new Date("2021-01-01").toISOString(),
      publishedAt: new Date("2021-01-01").toISOString(),
      revisedAt: new Date("2021-01-01").toISOString(),
    },
  },
};
