import React from 'react';
import { ArticleListContainer } from '../containers/article-list-container';
import { Single } from '../layouts/single';

const Blog: React.SFC = () => {
  return (
    <Single>
      <h2>Blog</h2>

      <section>
        <ArticleListContainer />
      </section>
    </Single>
  );
};

export default Blog;
