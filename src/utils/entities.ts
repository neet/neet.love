import { FixedObject } from 'gatsby-image';

export type SocialAccountType =
  | 'mastodon'
  | 'email'
  | 'discord'
  | 'telegram'
  | 'keybase'
  | 'twitter'
  | 'github'
  | 'gitlab'
  | 'medium'
  | 'slideshare'
  | 'npm'
  | 'docker'
  | 'bitcoin'
  | 'patreon';

export interface SocialAccount {
  type: SocialAccountType;
  name: string;
  label: string;
  href?: string;
  copyable?: string;
  suggested?: boolean;
  bgColor?: string;
  fgColor?: string;
}

export interface Fact {
  name: string;
  value: string;
  image: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

export interface BannerField {
  name: string;
  value: string;
  external?: boolean;
}
