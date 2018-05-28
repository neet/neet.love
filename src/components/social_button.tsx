import * as React from 'react';

interface Social {
  name: string;
  label: string;
  href: string;
}

interface Props {
  social: Social;
}

const SocialButton: React.SFC<Props> = ({ social }) => (
  <a className='social-button' href={social.href}>
    {social.name}: {social.label}
  </a>
);

export default SocialButton;
