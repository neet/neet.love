import { graphql } from 'gatsby';
import React from 'react';
import { Article } from '../components/article';
import { SeoContainer } from '../containers/seo-container';
import { ArticleLayout } from '../layouts/article-layout';
import { Article as ArticleEntity, Bio, SiteMetadata } from '../utils/entities';

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
    <SeoContainer
      title={`${data.markdownRemark.frontmatter.title} - ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.excerpt}
    />
    <ArticleLayout>
      <Article article={data.markdownRemark} author={data.bioYaml} />
    </ArticleLayout>
  </>
);

export default Blog;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    bioYaml {
      name
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
          }
        }
      }
    }
  }
`;
