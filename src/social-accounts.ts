import {
  faBitcoin,
  faDiscord,
  faDocker,
  faGithub,
  faGitlab,
  faKeybase,
  faMastodon,
  faMediumM,
  faNpm,
  faPatreon,
  faSlideshare,
  faTelegramPlane,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export type SocialAccount = {
  name: string;
  label: string;
  fa: IconDefinition;
  fgColor: string;
  bgColor: string;
  suggested?: boolean;
  href?: string;
  copyable?: string;
};

export const socialAccounts: SocialAccount[] = [
  {
    name: 'Mastodon',
    label: '@neet@mastodon.social',
    href: 'https://mastodon.social/@neet',
    fa: faMastodon,
    bgColor: '#297ccd',
    fgColor: 'white',
    suggested: true,
  },
  {
    name: 'Email',
    label: 'n33t5hin@gmail.com',
    href: 'mailto:n33t5hin@gmail.com',
    fa: faEnvelope,
    bgColor: '#1981e0',
    fgColor: 'white',
    suggested: true,
  },
  {
    name: 'Discord',
    label: '@neet#9999',
    copyable: 'neet#9999',
    fa: faDiscord,
    bgColor: '#7289da',
    fgColor: 'white',
    suggested: true,
  },
  {
    name: 'Telegram',
    label: '@neetchan',
    href: 'https://t.me/neetchan',
    fa: faTelegramPlane,
    bgColor: '#2ca5e0',
    fgColor: 'white',
    suggested: true,
  },
  {
    name: 'Keybase',
    label: '@neet',
    href: 'https://keybase.io/neet',
    fa: faKeybase,
    bgColor: '#FF6300',
    fgColor: 'white',
  },
  {
    name: 'Twitter',
    label: '@TheGodOfNeet',
    href: 'https://twitter.com/thegodofneet',
    fa: faTwitter,
    bgColor: '#1a97f0',
    fgColor: 'white',
  },
  {
    name: 'GitHub',
    label: '@neet',
    href: 'https://github.com/neet',
    fa: faGithub,
    bgColor: 'black',
    fgColor: 'white',
  },
  {
    name: 'GitLab.com',
    label: '@neetshin',
    href: 'https://gitlab.com/neetshin',
    fa: faGitlab,
    bgColor: '#de3a25',
    fgColor: 'white',
  },
  {
    name: 'Medium',
    label: '@neetshin',
    href: 'https://medium.com/@neetshin',
    fa: faMediumM,
    bgColor: 'white',
    fgColor: 'black',
  },
  {
    name: 'SlideShare',
    label: 'ssuser881c4e',
    href: 'https://www.slideshare.net/ssuser881c4e',
    fa: faSlideshare,
    bgColor: '#0077b5',
    fgColor: 'white',
  },
  {
    name: 'npm',
    label: 'neetshin',
    href: 'https://www.npmjs.com/~neetshin',
    fa: faNpm,
    bgColor: '#cb3837',
    fgColor: 'white',
  },
  {
    name: 'DockerHub',
    label: 'neetshin',
    href: 'https://hub.docker.com/r/neetshin/',
    fa: faDocker,
    bgColor: '#1488c6',
    fgColor: 'white',
  },
  {
    name: 'Bitcoin',
    label: '3AucsLDnY37qipYngLM5KH9heWkJ1AEArv',
    copyable: '3AucsLDnY37qipYngLM5KH9heWkJ1AEArv',
    fa: faBitcoin,
    bgColor: '#ff8e02',
    fgColor: 'white',
  },
  {
    name: 'Patreon',
    label: 'neetshin',
    href: 'https://www.patreon.com/neetshin',
    fa: faPatreon,
    bgColor: '#f96854',
    fgColor: 'white',
  },
];
