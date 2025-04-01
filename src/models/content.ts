import { MicroCMSImage } from "microcms-js-sdk";

export type MicroCMSDefaultFields = {
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly publishedAt: string;
  readonly revisedAt: string;
};

export type Hashtag = {
  readonly id: string;
  readonly title: string;
};

export type Blog = MicroCMSDefaultFields & {
  readonly id: string;
  readonly lang: string[];
  readonly title: string;
  readonly content: string;
  readonly eyecatch: MicroCMSImage;
  readonly hashtags: readonly Hashtag[];
};
