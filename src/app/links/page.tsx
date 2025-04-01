import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import clsx from "clsx";
import { load } from "js-yaml";
import { Metadata } from "next";

import { RichLink } from "@/components/RichLink/RichLink";
import * as link from "@/models/link";

export const metadata: Metadata = {
  title: "Links",
  description: "Links to things I use",
  alternates: {
    canonical: "/links",
  },
};

export default async function Page() {
  const content = await fs.readFile(
    path.join(fileURLToPath(import.meta.url), "../links.yaml"),
    "utf-8",
  );
  const richLinks = load(content) as link.RichLink[];

  return (
    <div className="mx-auto max-w-screen-md">
      <header className="my-8 text-center">
        <h1
          className={clsx("font-yeseva text-4xl md:text-6xl dark:text-white")}
        >
          Links
        </h1>
        <p className="mt-2 dark:text-white">
          links to where I am on the internet
        </p>
      </header>

      <ul className="mx-auto grid max-w-xl grid-cols-2 gap-2 px-3 md:grid-cols-4 md:gap-3 md:px-0">
        {richLinks.map((richLink, i) => (
          <li key={`${richLink.name}-${i}`} className="col-span-1">
            <RichLink richLink={richLink} />
          </li>
        ))}
      </ul>
    </div>
  );
}
