import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import Blogs from '../blogs';

const posts = [
  {
    id: '94d9b4a2f28c',
    title: 'あ',
    createdAt: '2018-05-25',
    virtuals: {
      subtitle: '',
      previewImage: {
        imageId: '',
      },
    },
    uniqueSlug: 'あ-94d9b4a2f28c',
  },
];

describe('Blogs', () => {
  it('renders a medium posts with given props', () => {
    const component = ReactTestRenderer.create(<Blogs posts={posts} />);
    const tree      = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
