import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import Letterhead from '../letterhead';

describe('Letterhead', () => {
  it('rends a letterhead with a given react node', () => {
    const tree = ReactTestRenderer.create(
      <Letterhead>
        <p>This is a node</p>
      </Letterhead>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
