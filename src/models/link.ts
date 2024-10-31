type RichLinkBase = {
  type: string;
  name: string;
  label: string;
};

export type RichLinkWithURL = RichLinkBase & {
  url: string;
};

export type RichLinkWithCopyable = RichLinkBase & {
  copyable: string;
};

export type RichLink = RichLinkWithURL | RichLinkWithCopyable;
