import * as copy from 'copy-to-clipboard';
import * as React from 'react';
import { SocialAccount } from '../pages/index';

interface Props {
  socialAccounts: { node: SocialAccount }[];
}

export default class SocialAccounts extends React.PureComponent<Props> {

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const i = e.currentTarget.getAttribute('data-index') as string;
    const socialAccount = this.props.socialAccounts[Number(i)].node;

    if (socialAccount.copy) {
      e.preventDefault();
      copy(socialAccount.copy);
      alert(`${socialAccount.copy}をコピーしました`);
    }
  }

  private renderItem = (socialAccount: SocialAccount, i: number) => {
    return (
      <li className='social-accounts__list-item' key={`${i}-${socialAccount.name}`} role='listitem' aria-posinset={i + 1} aria-setsize={this.props.socialAccounts.length}>
        <div className='social-account-button'>
          <a
            className='social-account-button__link'
            href={socialAccount.href}
            title={socialAccount.label}
            data-index={i}
            onClick={this.handleClick}
          >
            <span className='social-account-button__fa-wrapper'>
              <i className={`social-account-button__fa ${socialAccount.fa}`} aria-hidden />
            </span>

            <span className='social-account-button__label'>
              {socialAccount.name}
            </span>
          </a>
        </div>
      </li>
    );
  }

  public render () {
    const { socialAccounts } = this.props;

    return (
      <div className='social-accounts section'>
        <ul className='social-accounts__list' role='listbox'>
          {socialAccounts.map(({ node }, i) => this.renderItem(node, i))}
        </ul>
      </div>
    );
  }
}
