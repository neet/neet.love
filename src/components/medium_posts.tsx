import * as React from 'react';
import { MediumPost } from '../pages/index';

interface Props {
  posts: MediumPost[];
}

const MEDIUM_POST_BASE  = 'https://medium.com/@neetshin';
const MEDIUM_IMAGE_BASE = 'https://cdn-images-1.medium.com/max/320';

export default class MediumPosts extends React.PureComponent<Props> {
  private renderItem = (post: MediumPost, i: number) => {
    const date          = new Date(post.createdAt);
    const formattedDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
    const thumbnailUrl  = `${MEDIUM_IMAGE_BASE}/${post.virtuals.previewImage.imageId}`;

    return (
      <li className='medium-post section' key={`${i}-${post.id}`} role='listitem' aria-posinset={i + 1} aria-setsize={this.props.posts.length}>
        <a className='medium-post__link' href={`${MEDIUM_POST_BASE}/${post.uniqueSlug}`}>
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
      </li>
    );
  }

  public render () {
    const { posts } = this.props;

    return (
      <ul role='listbox' className='medium-posts'>
        {posts.map((post, i) => this.renderItem(post, i))}
      </ul>
    );
  }
}
