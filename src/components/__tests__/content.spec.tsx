import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import Content from '../content';

describe('Content', () => {
  it('renders a content with given react node', () => {
    const tree = ReactTestRenderer.create(
      <Content>
        <p>This is a node</p>
      </Content>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
