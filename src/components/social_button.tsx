import * as React from 'react';

interface Props {
  social: Social;
}

const SocialButton: React.SFC<Props> = ({ social }) => (
  <div className='social-button'>
    <a className='social-button__link' href={social.href} title={social.name}>
      <i className={`social-button__fa ${social.fa}`} aria-hidden />

      <span className='social-button__label'>
        {social.label}
      </span>
    </a>
  </div>
);

export default SocialButton;
