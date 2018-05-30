import * as React from 'react';
import FadeIn from 'react-fade-in';
import Gravatar from '../components/gravatar';
import MediumPosts from '../components/medium_posts';
import Page from '../components/page';
import SocialAccounts from '../components/social_accounts';

export interface SocialAccount {
  name: string;
  label: string;
  href?: string;
  copy?: string;
  fa: string;
}

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
    allSocialAccountsYaml: {
      edges: { node: SocialAccount }[];
    };
    allMediumPost: {
      edges: { node: MediumPost }[],
    };
  };
}

const Index: React.SFC<Props> = ({ data }) => {
  const mediumPosts = data.allMediumPost.edges.map((item) => item.node);
  const socialAccounts = data.allSocialAccountsYaml.edges;

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
      <FadeIn>
        <p>
          高校一年生です，よろしくおねがいします．
        </p>


        <h2>Skills</h2>
        <p>
          JavaScript, TypeScript, PHP, Python, Node,
          Electron, React, Redux, Mobx, Sass,
          Web Extension, Nginx, Apache, Docker,
          CentOS, Ubuntu, Alphine Linux,
          Laravel, Express,
          MySQL, PostgreSQL, MongoDB, Redis
        </p>

        <h2>Social accounts</h2>
        <SocialAccounts socialAccounts={socialAccounts} />

        <h2>Medium</h2>
        <MediumPosts posts={mediumPosts} />
      </FadeIn>
    </Page>
  );
};

export default Index;

export const query = graphql`
  query ConfigData {
    allSocialAccountsYaml {
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
