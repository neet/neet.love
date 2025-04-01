"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useId,
  useMemo,
} from "react";

import { Blog } from "../../models/content";
import { sanitize } from "../../utils/sanitize";

export type ArticleCardProps = {
  readonly blog: Blog;
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const router = useRouter();
  const headingId = useId();

  const { blog } = props;
  const { title, eyecatch } = blog;
  const lang = blog.lang[0];

  const content = useMemo(() => {
    return sanitize(blog.content);
  }, [blog.content]);

  const navigate = useCallback((): void => {
    router.push(`/journals/${blog.id}`);
  }, [blog.id, router]);

  const handleClick: MouseEventHandler = useCallback(() => {
    navigate();
  }, [navigate]);

  const handleKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        navigate();
      }
    },
    [navigate],
  );

  return (
    <article
      className="group relative w-full cursor-pointer overflow-hidden rounded border border-zinc-300 bg-white outline-offset-4 hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:border dark:border-zinc-500 dark:bg-black dark:text-white"
      tabIndex={0}
      aria-labelledby={headingId}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      lang={lang}
    >
      <div className="relative aspect-video">
        <Image
          src={eyecatch.url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 374px"
        />
      </div>

      <div className="p-4">
        <h2
          className={clsx(
            "text-2xl",
            lang === "ja" ? "font-sans font-bold" : "font-yeseva",
          )}
          id={headingId}
        >
          <Link
            href={`/journals/${blog.id}`}
            hrefLang={lang}
            tabIndex={-1}
            className="group-hover:text-blue-600 group-hover:underline dark:group-hover:text-blue-400"
          >
            {title}
          </Link>
        </h2>

        <p
          className="mt-1 line-clamp-2 text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};
