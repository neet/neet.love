import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import Links from '../links';

const links = [
  {
    name: 'Twitter',
    label: '@TheGodOfNeet',
    href: 'https://twitter.com/thegodofneet',
    fa: 'fab fa-twitter',
    color1: '#297ccd',
    color2: 'white',
    tag: 'social',
  },
  {
    name: 'Mastodon',
    label: '@neet@mastodon.social',
    href: 'https://mastodon.social/@neet',
    fa: 'fab fa-mastodon',
    color1: '#1981e0',
    color2: 'white',
    tag: 'social',
  },
  {
    name: 'Discord',
    label: 'neetshin#1400',
    copy: 'neetshin#1400',
    fa: 'fab fa-discord',
    color1: '#7289da',
    color2: 'white',
    tag: 'social',
  },
];

describe('Links', () => {
  it('renders a avatar component with given props', () => {
    const tree = ReactTestRenderer.create(
      <Links links={links} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
