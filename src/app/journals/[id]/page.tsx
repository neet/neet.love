import clsx from "clsx";
import { Metadata, ResolvingMetadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/api";
import { Blog } from "@/models/content";
import { parse } from "@/utils/parse";
import { sanitize } from "@/utils/sanitize";

type ArticlePageProps = {
  readonly params: {
    readonly id: string;
  };
  readonly searchParams: {
    readonly draftKey?: string;
  };
};

export async function generateMetadata(
  props: ArticlePageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = props.params;
  const { draftKey } = props.searchParams;

  const data = await client.get<Blog>({
    endpoint: "blogs",
    contentId: id,
    queries: { draftKey },
  });

  const description = sanitize(data.content).slice(0, 160) + "…";

  return {
    title: data.title,
    robots: (await parent).robots?.basic,
    description,
    openGraph: {
      images: [new URL(data.eyecatch.url)],
    },
    alternates: {
      canonical: `/journals/${id}`,
    },
  };
}

export const revalidate = 86_400;

export default async function Page(props: ArticlePageProps) {
  const { id } = props.params;
  const { draftKey } = props.searchParams;

  if (draftKey != null) {
    noStore();
  }

  const data = await client.get<Blog>({
    endpoint: "blogs",
    contentId: id,
    queries: { draftKey },
  });

  const lang = data.lang[0];

  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = formatter.format(new Date(data.publishedAt));

  return (
    <>
      <article className="w-full" lang={lang}>
        <header className="relative z-10 m-auto mt-8 max-w-screen-md px-4 text-center md:px-0">
          <h1
            className={clsx(
              "text-4xl md:text-6xl dark:text-white",
              lang === "ja" ? "font-sans font-bold" : "font-yeseva",
            )}
          >
            {data.title}
          </h1>

          <time
            dateTime={data.publishedAt}
            className="mt-4 block text-zinc-600 dark:text-zinc-400"
          >
            {time}
          </time>

          <Image
            className={clsx(
              "mt-4 rounded-lg",
              "border-b-8 border-l-4 border-r-8 border-t-4",
              "border-black bg-black shadow-lg",
              "dark:border dark:border-zinc-700",
            )}
            src={data.eyecatch.url}
            alt=""
            width={data.eyecatch.width}
            height={data.eyecatch.height}
            sizes="(max-width: 768px) 100vw, 756px"
            priority
          />
        </header>

        <div className="-mt-24 box-border w-full border-y border-zinc-200 bg-white px-4 pb-8 pt-32 md:px-0 dark:border-zinc-700 dark:bg-black">
          <div className="m-auto max-w-screen-sm">
            <div className="prose prose-lg prose-zinc dark:prose-invert prose-figcaption:text-center">
              {parse(data.content)}
            </div>

            <ul className="mt-4 flex gap-4">
              {data.hashtags.map((hashtag) => (
                <li key={hashtag.id}>
                  <Link
                    href={`/hashtags/${hashtag.id}`}
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    #{hashtag.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
