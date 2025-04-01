import clsx from "clsx";
import { Metadata } from "next";

import { client } from "@/api";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Blog } from "@/models/content";

export const metadata: Metadata = {
  title: "Journals",
  description: "fragments of my thoughts, feelings, and memory",
  alternates: {
    canonical: "/journals",
  },
};

export const revalidate = 60;

export default async function Page() {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
  });

  return (
    <div className="m-auto max-w-screen-md">
      <header className="my-8 text-center">
        <h1
          className={clsx("font-yeseva text-4xl md:text-6xl dark:text-white")}
        >
          Journal
        </h1>
        <p className="mt-2 dark:text-white">
          fragments of my thoughts, feelings, and memory
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 md:gap-4 md:px-0">
        {data.contents.map((blog) => (
          <li key={blog.id}>
            <ArticleCard blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
}
