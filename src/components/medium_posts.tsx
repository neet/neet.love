import * as React from 'react';
import { MediumPost } from '../pages/index';

interface Props {
  posts: MediumPost[];
}

const MediumPosts: React.SFC<Props> = ({ posts }) => {
  return (
    <div className='medium-posts'>
      {
        posts.map((post, i) => {
          const date          = new Date(post.createdAt);
          const formattedDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
          const thumbnailUrl  = `https://cdn-images-1.medium.com/max/320/${post.virtuals.previewImage.imageId}`;

          return (
            <div className='medium-post' key={`${i}-${post.id}`}>
              <a className='medium-post__link' href={`https://medium.com/@neetshin/${post.uniqueSlug}`}>
                {
                  post.virtuals.previewImage.imageId !== '' ? (
                    <div className='medium-post__thumbnail' style={{ backgroundImage: `url(${thumbnailUrl})` }}/>
                  ) : (
                    <div className='medium-post__thumbnail medium-post__thumbnail--no-image'/>
                  )
                }

                <div className='medium-post__meta'>
                  <h3 className='medium-post__title'>
                    {post.title}
                  </h3>

                  <time className='medium-post__date'>
                    <i className='far fa-clock medium-post__date-icon' aria-hidden />
                    {formattedDate}
                  </time>
                </div>
              </a>
            </div>
          );
        })
      }
    </div>
  );
};

export default MediumPosts;
