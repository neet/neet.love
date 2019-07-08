import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { Article as ArticleLayout } from '../layouts/article';
import { Article as IArticle, SiteMetadata } from '../utils/entities';

const Article = styled.article``;

const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.6;
`;

const Thumbnail = styled(GatsbyImage)`
  margin-bottom: 24px;
`;

const Content = styled.div`
  font-size: 16px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 2;
  }

  p,
  pre,
  ul,
  ol,
  table {
    margin-bottom: 24px;
  }

  p {
    line-height: 1.6;
  }

  ul {
    margin-left: 24px;
    list-style: inside;
  }
`;

interface PageTemplateProps {
  data: {
    siteMetadataYaml: SiteMetadata;
    markdownRemark: IArticle;
  };
}

const Blog: React.SFC<PageTemplateProps> = ({ data }) => (
  <>
    <Helmet title={`${data.markdownRemark.frontmatter.title} - ${data.siteMetadataYaml.title}`} />
    <ArticleLayout>
      <Article>
        <Title>{data.markdownRemark.frontmatter.title}</Title>
        <Thumbnail fluid={oc(data.markdownRemark.frontmatter.thumbnail).childImageSharp.fluid()} />
        <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Article>
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
