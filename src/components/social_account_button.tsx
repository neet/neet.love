import * as copy from 'copy-to-clipboard';
import * as React from 'react';
import { SocialAccount } from '../pages/index';

interface Props {
  socialAccount: SocialAccount;
}

const SocialAccountButton: React.SFC<Props> = ({ socialAccount }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (socialAccount.copy) {
      e.preventDefault();
      copy(socialAccount.copy);
      alert(`${socialAccount.copy}をコピーしました`);
    }
  };

  return (
    <div className='social-account-button'>
      <a
        className='social-account-button__link'
        href={socialAccount.href}
        title={socialAccount.label}
        onClick={handleClick}
      >
        <span className='social-account-button__fa-wrapper'>
          <i className={`social-account-button__fa ${socialAccount.fa}`} aria-hidden />
        </span>

        <span className='social-account-button__label'>
          {socialAccount.name}
        </span>
      </a>
    </div>
  );
};

export default SocialAccountButton;
