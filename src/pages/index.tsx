import * as React from 'react';
import Feeds from '../components/feeds';
import Gravatar from '../components/gravatar';
import Page from '../components/page';
import Social from '../components/social';

import lagunehq from '../../images/lagunehq.png';
import nijipico from '../../images/nijipico.png';
import tipwaves from '../../images/tipwaves.png';

interface Props {
  data: {
    allSocialYaml: {
      edges: { node: Social }[];
    };
    allMetaYaml: {
      edges: {
        node: {
          gravatar_email: string;
          medium_rss_uri: string;
        },
      }[];
    }
  };
}

const Index: React.SFC<Props> = ({ data }) => {
  console.log(data);
  const socialNodes   = data.allSocialYaml.edges;
  const gravatarEmail = data.allMetaYaml.edges[0].node.gravatar_email;
  const mediumRssUri  = data.allMetaYaml.edges[0].node.medium_rss_uri;

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
      <Feeds feedUri={mediumRssUri} />
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
    allMetaYaml {
      edges {
        node {
          gravatar_email
          medium_rss_uri
        }
      }
    }
  }
`;
