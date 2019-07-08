import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Article as ArticleLayout } from '../layouts/article';
import { SiteMetadata } from '../utils/entities';

const Article = styled.article``;

const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.6;
`;

const Content = styled.div`
  font-size: 16px;

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 2;
  }

  p, pre, ul, ol, table {
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
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const Blog: React.SFC<PageTemplateProps> = ({ data }) => (
  <ArticleLayout>
    <Helmet title={`${data.markdownRemark.frontmatter.title} - ${data.siteMetadataYaml.title}`} />
    <Article>
      <Title>{data.markdownRemark.frontmatter.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Article>
  </ArticleLayout>
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
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
