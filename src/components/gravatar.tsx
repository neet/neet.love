import * as md5 from 'md5';
import * as React from 'react';

interface Props {
  className?: string;
  email: string;
  title?: string;
  size?: number;
  defaultImage?: string;
  forceDefault?: boolean;
  rating?: 'g'|'pg'|'r'|'x';
}

const GRAVATAR_URI = 'https://secure.gravatar.com/avatar';

const Gravatar: React.SFC<Props> = (props) => {
  const hash = md5(props.email);
  const options = [
    ['s', (props.size && `${props.size}px` || '80px')],
    ['d', (props.defaultImage || '')],
    ['f', (props.forceDefault && 'y')],
    ['r', (props.rating || 'g')],
  ];
  const url  = `${GRAVATAR_URI}/${hash}?${options.map((item) => `${item[0]}=${item[1]}`)}`;

  return (
    <img
      className={props.className}
      src={url}
      alt={props.title || ''}
    />
  );
};

export default Gravatar;
