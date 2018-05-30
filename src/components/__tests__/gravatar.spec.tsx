import * as React from 'react';
import renderer from 'react-test-renderer';
import Gravatar from '../gravatar';

describe('Gravatar', () => {
  it('renders a avatar component with given props', () => {
    const tree = renderer.create(
      <Gravatar
        className='class'
        email='n33t5hin@gmail.com'
        title='Neetshin'
        size={20}
        defaultImage='https://link-to-default-image.com'
        forceDefault={false}
        rating='g'
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
