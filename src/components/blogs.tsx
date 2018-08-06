import * as React from 'react';
import { Blog } from '../pages';

interface Props {
  posts: Blog[];
}

const MEDIUM_POST_BASE  = 'https://medium.com/@neetshin';
const MEDIUM_IMAGE_BASE = 'https://cdn-images-1.medium.com/max/320';

export default class Blogs extends React.PureComponent<Props> {
  private renderItem = (post: Blog, i: number) => {
    const date          = new Date(post.createdAt);
    const formattedDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
    const thumbnailUrl  = `${MEDIUM_IMAGE_BASE}/${post.virtuals.previewImage.imageId}`;

    return (
      <li className='blog section' key={`${i}-${post.id}`} role='listitem' aria-posinset={i + 1} aria-setsize={this.props.posts.length}>
        <a className='blog__link' href={`${MEDIUM_POST_BASE}/${post.uniqueSlug}`}>
          {
            post.virtuals.previewImage.imageId !== '' ? (
              <div className='blog__thumbnail' style={{ backgroundImage: `url(${thumbnailUrl})` }}/>
            ) : (
              <div className='blog__thumbnail blog__thumbnail--no-image'/>
            )
          }

          <div className='blog__meta'>
            <h3 className='blog__title not-special-font'>
              {post.title}
            </h3>

            <time className='blog__date'>
              <i className='far fa-clock blog__date-icon' aria-hidden />
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
      <ul role='listbox' className='blogs'>
        {posts.map((post, i) => this.renderItem(post, i))}
      </ul>
    );
  }
}
