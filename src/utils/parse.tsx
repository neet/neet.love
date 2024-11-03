import { default as _parse, Element } from "html-react-parser";
import Image from "next/image";

const andThen = <T, U>(x: T | undefined, f: (x: T) => U): U | undefined =>
  x ? f(x) : undefined;

export function parse(html: string) {
  return _parse(html, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "img") {
        const { src, alt } = domNode.attribs;

        const width = andThen(domNode.attribs.width, Number);
        const height = andThen(domNode.attribs.height, Number);

        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, 640px"
          />
        );
      }
    },
  });
}
