import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ArticleList } from '../components/article-list';
import { Article } from '../utils/entities';

interface ArticleListContainerQueryData {
  allMarkdownRemark: {
    edges: {
      node: Article;
    }[];
  };
}

export const ArticleListContainer = () => {
  const data = useStaticQuery<ArticleListContainerQueryData>(graphql`
    query ArticleListContainerQuery {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 80)
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              thumbnail {
                childImageSharp {
                  fixed(width: 116, height: 116) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return <ArticleList articles={data.allMarkdownRemark.edges.map(edge => edge.node)} />;
};
