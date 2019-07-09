import React from 'react';
import { ArticleListContainer } from '../containers/article-list-container';
import { SingleLayout } from '../layouts/single-layout';

const Blog: React.SFC = () => {
  return (
    <SingleLayout>
      <h2>Blog</h2>

      <section>
        <ArticleListContainer />
      </section>
    </SingleLayout>
  );
};

export default Blog;
