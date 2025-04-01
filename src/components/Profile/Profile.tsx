import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapPinIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
import { FC, useId } from "react";

import me from "../../assets/me.webp";

export const Profile: FC = () => {
  const idLocation = useId();
  const idTwitter = useId();

  return (
    <div
      className={clsx(
        "box-border",
        "flex aspect-video w-full max-w-96 rotate-2 scale-95 items-center",
        "rounded border-b-8 border-l-2 border-r-8 border-t-2 border-black",
        "bg-white p-4 shadow-lg transition",
        "dark:border dark:border-zinc-500 dark:bg-black dark:text-white",
      )}
    >
      <div className="flex gap-4">
        <div className="mt-2 shrink-0">
          <Image
            width={100}
            src={me}
            alt="My profile picture"
            className="rounded-full border border-zinc-300 dark:border-zinc-700"
          />
        </div>

        <div className="grow">
          <h1 id="name" className="font-yeseva text-2xl leading-tight">
            <a href="#name">Ryō Igarashi</a>
          </h1>

          <p className="mt-1 font-light text-zinc-600 dark:text-zinc-400">
            I&apos;m a software engineer who loves the web and linguistics.
          </p>

          <dl className="mt-2 space-y-0.5">
            <div className="flex items-center">
              <dt>
                <MapPinIcon
                  className="h-4 w-4 text-zinc-600 dark:text-zinc-400"
                  aria-labelledby={idLocation}
                />
                <span className="sr-only" id={idLocation}>
                  Location
                </span>
              </dt>
              <dd>
                <p className="ml-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Tokyo, Japan
                </p>
              </dd>
            </div>

            <div className="flex items-center">
              <dt>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="h-4 w-4 text-zinc-600 dark:text-zinc-400"
                  id={idTwitter}
                />
                <span className="sr-only">Twitter</span>
              </dt>

              <dd>
                <a
                  href="https://twitter.com/TheGodOfNeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-sm text-zinc-600 underline dark:text-zinc-400"
                >
                  @TheGodOfNeet
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
