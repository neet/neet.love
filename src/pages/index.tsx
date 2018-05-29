import * as React from 'react';
import Gravatar from '../components/gravatar';
import MediumFeeds from '../components/medium_feeds';
import Page from '../components/page';
import Social from '../components/social';
import GraphQLRoot from '../typings/graphql_root';

interface Props {
  data: GraphQLRoot;
}

const Index: React.SFC<Props> = ({ data }) => {
  console.log(data);
  const socialNodes   = data.allSocialYaml.edges;
  const gravatarEmail = 'n33t5hin@gmail.com';
  const mediumPosts   = data.allMediumPost.edges.map((item) => item.node);

  return (
    <Page
      title='Neetshin'
      excerpt='Web engineer / FOSS developer'
      insertBefore={
        <Gravatar
          className='page__avatar'
          email={gravatarEmail}
          title='Neetshin'
          size={120}
        />
      }
    >

      <p>
        好きなVtuberは
        <a href='https://www.youtube.com/channel/UCIdEIHpS0TdkqRkHL5OkLtA'>名取さなさん</a>
        です，よろしくお願いします．
      </p>

      <h2>Social</h2>
      <Social socials={socialNodes} />

      <h2>Blog</h2>
      <MediumFeeds mediumPosts={mediumPosts} />
    </Page>
  );
};

export default Index;

export const query = graphql`
  query ConfigData {
    allSocialYaml {
      edges {
        node {
          name
          label
          href
          copy
          fa
        }
      }
    }
    allConfigYaml {
      edges {
        node {
          gravatar_email
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`;
