import * as React from 'react';
import { MediumPost } from '../typings/graphql_root';

interface Props {
  mediumPosts: MediumPost[];
}

const MediumFeeds: React.SFC<Props> = ({ mediumPosts }) => (
  <div className='medium-posts'>
    {
      mediumPosts.map((post, i) => (
        <div className='medium-post' key={`${i}-${post.id}`}>
          <h3>{post.title}</h3>
          <p>
            {post.author.name}
          </p>
        </div>
      ))
    }
  </div>
);

export default MediumFeeds;
