import * as React from 'react';
import SocialAccountButton from './social_account_button';
import { SocialAccount } from '../pages/index';

interface Props {
  socialAccounts: { node: SocialAccount }[];
}

const SocialAccounts: React.SFC<Props> = ({ socialAccounts }) => {
  return (
    <div className='social-accounts'>
      <ul className='social-accounts__list'>
        {
          socialAccounts.map(({ node }, i) => (
            <li className='social-accounts__list-item' key={`${i}-${node.name}`}>
              <SocialAccountButton socialAccount={node} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SocialAccounts;
