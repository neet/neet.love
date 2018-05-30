import * as React from 'react';
import renderer from 'react-test-renderer';
import Letterhead from '../letterhead';

describe('Letterhead', () => {
  it('renders a letterhead with a given react node', () => {
    const tree = renderer.create(
      <Letterhead>
        <p>This is a node</p>
      </Letterhead>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
