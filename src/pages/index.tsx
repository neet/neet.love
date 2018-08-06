import * as React from 'react';
import FadeIn from 'react-fade-in';
import Blogs from '../components/blogs';
import Gravatar from '../components/gravatar';
import Links from '../components/links';
import Page from '../components/page';

export interface Link {
  name: string;
  label: string;
  href?: string;
  copy?: string;
  fa: string;
}

export interface Blog {
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
    allLinksYaml: {
      edges: { node: Link }[];
    };
    allMediumPost: {
      edges: { node: Blog }[],
    };
  };
}

const Index: React.SFC<Props> = ({ data }) => {
  const blogs = data.allMediumPost.edges.map((item) => item.node);
  const links = data.allLinksYaml.edges;

  return (
    <Page
      title='Neetshin'
      excerpt='Web engineer / FOSS developer'
      insertBefore={
        <Gravatar
          className='page__avatar'
          email='n33t5hin@gmail.com'
          title='Neetshin'
          size={200}
        />
      }
    >
      <FadeIn>
        <h2>Skills</h2>
        <p className='section'>
          JavaScript, TypeScript, PHP, Python, Node,
          Electron, React, Redux, Mobx, Sass,
          Web Extension, Nginx, Apache, Docker,
          CentOS, Ubuntu, Alpine Linux,
          Laravel, Express,
          MySQL, PostgreSQL, MongoDB, Redis
        </p>

        <h2>Medium</h2>
        <Blogs posts={blogs} />

        <h2>Social accounts</h2>
        <Links links={links} />
      </FadeIn>
    </Page>
  );
};

export default Index;

export const query = graphql`
  query ConfigData {
    allLinksYaml {
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
