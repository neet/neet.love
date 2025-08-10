import Link from "next/link";
import { ComponentProps, FC, useId } from "react";

export type BannerProps = ComponentProps<"header">;

export const Banner: FC<BannerProps> = (props) => {
  const { className, ...rest } = props;
  const id = useId();

  return (
    <header aria-labelledby={id} className={className} {...rest}>
      <div className="mx-auto flex max-w-screen-md justify-between p-4">
        <Link
          href="/"
          shallow={false}
          className="font-mono text-black underline hover:underline dark:text-white"
        >
          neet.love
        </Link>

        <h2 id={id} className="sr-only">
          Navigation
        </h2>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/journals"
                className="lowercase text-blue-600 underline dark:text-blue-400"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="lowercase text-blue-600 underline dark:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
