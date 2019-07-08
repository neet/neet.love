import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Article } from '../components/article';
import { ArticleLayout } from '../layouts/article-layout';
import { Article as ArticleEntity, SiteMetadata } from '../utils/entities';

interface PageTemplateProps {
  data: {
    siteMetadataYaml: SiteMetadata;
    markdownRemark: ArticleEntity;
  };
}

const Blog: React.SFC<PageTemplateProps> = ({ data }) => (
  <>
    <Helmet title={`${data.markdownRemark.frontmatter.title} - ${data.siteMetadataYaml.title}`} />
    <ArticleLayout>
      <Article article={data.markdownRemark} author={data.siteMetadataYaml.author} />
    </ArticleLayout>
  </>
);

export default Blog;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    siteMetadataYaml {
      title
      description
      author {
        name
        avatar {
          childImageSharp {
            fixed(width: 46) {
              ...GatsbyImageSharpFixed
            }
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
          }
        }
      }
    }
  }
`;
