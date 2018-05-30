import * as React from 'react';
import MediumPosts from '../components/medium_posts';
import Page from '../components/page';

export interface MediumPost {
  id: string;
  title: string;
  uniqueSlug: string;
  createdAt: string;
  virtuals: {
    subtitle: string;
    previewImage: {
      imageId: string,
    };
  };
}

interface Props {
  data: {
    allMediumPost: {
      edges: { node: MediumPost }[],
    };
  };
}

const Medium: React.SFC<Props> = ({ data }) => {
  const posts = data.allMediumPost.edges.map((item) => item.node);

  return (
    <Page
      title='Medium'
      excerpt='最近更新されたブログ記事の一覧'
    >
      <MediumPosts posts={posts} />
    </Page>
  );
};

export default Medium;

export const query = graphql`
  query MediumPosts {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          createdAt
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          uniqueSlug
        }
      }
    }
  }
`;
