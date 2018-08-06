import * as React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(
      <Blogs posts={posts} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
