import React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <article>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </article>
  </IndexLayout>
);

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
