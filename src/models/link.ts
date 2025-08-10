type BaseContact = {
  type: string;
  name: string;
  label: string;
};

export type ContactWithURL = BaseContact & {
  url: string;
};

export type ContactWithCopyable = BaseContact & {
  copyable: string;
};

export type Contact = ContactWithURL | ContactWithCopyable;
