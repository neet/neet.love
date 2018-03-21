import yaml from 'js-yaml';

export interface Link {
  name: string;
  icon: string;
  href?: string;
  text?: string;
  username: string;
}

export interface Work {
  name: string;
  type: string;
  href: string;
  description: string;
}

export const links: Link[] = yaml.load(require('./links.yml'));
export const works: Work[] = yaml.load(require('./works.yml'));
export const skills: string[] = yaml.load(require('./skills.yml'));
export const qualifications: string[] = yaml.load(require('./qualifications.yml'));
