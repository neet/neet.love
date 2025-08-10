"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC, KeyboardEventHandler, MouseEventHandler } from "react";

import * as link from "@/models/link";
import { faIconMap } from "@/utils/icon";

export type ContactCardProps = {
  contact: link.Contact;
};

export const ContactCard: FC<ContactCardProps> = (props) => {
  const { contact } = props;

  const invoke = () => {
    if ("url" in contact) {
      return window.open(contact.url, "_blank");
    } else {
      navigator.clipboard.writeText(contact.copyable);
      window.alert(`“${contact.copyable}” has been copied to clipboard!`);
    }
  };

  const handleClick: MouseEventHandler<unknown> = (e) => {
    e.preventDefault();
    invoke();
  };

  const handleKeyDown: KeyboardEventHandler<unknown> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      invoke();
    }
  };

  const labelNode =
    "url" in contact ? (
      <a
        href={contact.url}
        className="text-sm underline"
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={-1}
      >
        {contact.label}
      </a>
    ) : (
      <button className="text-sm underline">{contact.label}</button>
    );

  return (
    <div
      tabIndex={0}
      className={clsx(
        "h-full",
        "flex flex-col items-center",
        "rounded-lg p-3",
        "border",
        "outline-2 outline-offset-4 outline-blue-500 focus:outline",
        "border-zinc-200 bg-white hover:bg-zinc-100",
        "dark:border-zinc-700 dark:bg-black dark:hover:bg-zinc-900",
        "cursor-pointer",
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div
        className={clsx(
          "flex items-center justify-center",
          "box-border size-12 rounded-full",
          "bg-zinc-100 text-zinc-900",
          "dark:bg-zinc-900 dark:text-zinc-100",
        )}
      >
        <FontAwesomeIcon
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          icon={faIconMap[contact.type]!}
          fixedWidth
          size="xl"
        />
      </div>

      <div className="mt-1 w-full overflow-hidden text-ellipsis text-center text-zinc-600 dark:text-zinc-400">
        <div className="line-clamp-1 text-black dark:text-white">
          {contact.name}
        </div>

        {labelNode}
      </div>
    </div>
  );
};
