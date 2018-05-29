import * as copy from 'copy-to-clipboard';
import * as React from 'react';

interface Props {
  social: Social;
}

const SocialButton: React.SFC<Props> = ({ social }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (social.copy) {
      e.preventDefault();
      copy(social.copy);
      alert(`${social.copy}をコピーしました`);
    }
  };

  return (
    <div className='social-button'>
      <a
        className='social-button__link'
        href={social.href}
        title={social.label}
        onClick={handleClick}
      >
        <i className={`social-button__fa ${social.fa}`} aria-hidden />

        <span className='social-button__label'>
          {social.name}
        </span>
      </a>
    </div>
  );
};

export default SocialButton;
