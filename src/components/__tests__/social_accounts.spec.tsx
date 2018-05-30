import { shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import SocialAccounts from '../social_accounts';

const socialAccounts = [
  {
    node: {
      name: 'Twitter',
      label: '@TheGodOfNeet',
      href: 'https://twitter.com/thegodofneet',
      fa: 'fab fa-twitter',
    },
  },
  {
    node: {
      name: 'Mastodon',
      label: '@neet@mastodon.social',
      href: 'https://mastodon.social/@neet',
      fa: 'fab fa-mastodon',
    },
  },
  {
    node: {
      name: 'Discord',
      label: 'neetshin#1400',
      copy: 'neetshin#1400',
      fa: 'fab fa-discord',
    },
  },
];

describe('Gravatar', () => {
  it('renders a avatar component with given props', () => {
    const tree = renderer.create(
      <SocialAccounts socialAccounts={socialAccounts} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not change location even if link that comes with copy clicked', () => {
    const href = location.href;
    const button = shallow(
      <SocialAccounts socialAccounts={socialAccounts} />,
    );
    button.find('a[title="neetshin#1400"]').simulate('click');

    expect(location.href).toBe(href);
  });
});
