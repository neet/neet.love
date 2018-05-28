import * as React from 'react';
import FadeIn from 'react-fade-in';
import Gravatar from '../components/gravatar';
import Page from '../components/page';
import SocialButton from '../components/social_button';

interface Props {
  data: {
    allSocialYaml: {
      edges: { node: Social }[];
    };
  };
}

const Index: React.SFC<Props> = ({data}) => {
  const socialNodes = data.allSocialYaml.edges;

  return (
    <Page
      title='Neetshin'
      excerpt='Web engineer / FOSS developer'
      insertBefore={
        <Gravatar
          className='page__avatar'
          email='n33t5hin@gmail.com'
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

      <FadeIn delay={100}>
        {
          socialNodes.map(({node}: Social) => (
            <SocialButton key={node.name} social={node} />
          ))}
      </FadeIn>
    </Page>
  );
};

export default Index;

export const query = graphql`
  query AllSocialYaml {
    allSocialYaml {
      edges {
        node {
          name
          label
          href
          fa
        }
      }
    }
  }
`;
