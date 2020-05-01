import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { ArticleList } from '../components/article-list';
import { Article } from '../types';

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
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
                  fluid(maxWidth: 116, maxHeight: 116) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ArticleList
      articles={data.allMarkdownRemark.edges.map((edge) => edge.node)}
    />
  );
};
