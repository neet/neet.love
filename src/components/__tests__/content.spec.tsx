import * as React from 'react';
import renderer from 'react-test-renderer';
import Content from '../content';

describe('Content', () => {
  it('renders a content with given react node', () => {
    const tree = renderer.create(
      <Content>
        <p>This is a node</p>
      </Content>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
