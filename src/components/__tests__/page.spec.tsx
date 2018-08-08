import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import Page from '../page';

describe('Page', () => {
  it('renders a page with given title and excerpt', () => {
    const tree = ReactTestRenderer.create(
      <Page
        title='Awesome article'
        excerpt='This article is awesome you should read'
      >
        <p>This is a article</p>
      </Page>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
