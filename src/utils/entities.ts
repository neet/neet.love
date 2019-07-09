import { FixedObject, FluidObject } from 'gatsby-image';

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

export interface GithubRepository {
  id: string;
  name: string;
  forkCount: number;
  url: string;
  stargazers: {
    totalCount: number;
  };
  primaryLanguage: {
    color: string;
    name: string;
  };
  description: string;
}

export interface Article {
  id: string;
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    thumbnail?: {
      childImageSharp: {
        fixed: FixedObject;
        fluid: FluidObject;
      };
    };
  };
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

export interface Bio {
  name: string;
  email: string;
  avatar: {
    childImageSharp: {
      fixed: FixedObject;
      fluid: FluidObject;
    };
  };
  note: string;
  quote: string;
}
