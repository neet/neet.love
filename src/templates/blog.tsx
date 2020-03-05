import { graphql } from 'gatsby';
import React from 'react';

import { Article } from '../components/article';
import { OpenGraphContainer } from '../containers/open-graph-container';
import { ArticleLayout } from '../layouts/article-layout';
import { Article as ArticleEntity, Bio, SiteMetadata } from '../types';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    bioYaml: Bio;
    markdownRemark: ArticleEntity;
  };
}

const Blog: React.SFC<PageTemplateProps> = ({ data }) => (
  <>
    <ArticleLayout>
      <Article article={data.markdownRemark} bio={data.bioYaml} />
    </ArticleLayout>

    {/* Overrides layouts/article-layout.tsx */}
    <OpenGraphContainer
      title={
        data.markdownRemark.frontmatter.title +
        ' - ' +
        data.site.siteMetadata.title
      }
      description={data.markdownRemark.excerpt}
      thumbnail={
        data.markdownRemark.frontmatter.thumbnail &&
        data.site.siteMetadata.siteUrl +
          data.markdownRemark.frontmatter.thumbnail.childImageSharp.fixed.src
      }
    />
  </>
);

export default Blog;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    bioYaml {
      name
      email
      note
      avatar {
        childImageSharp {
          fixed(width: 46) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
