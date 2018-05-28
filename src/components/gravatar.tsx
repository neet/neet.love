import * as md5 from 'md5';
import * as queryString from 'query-string';
import * as React from 'react';

interface Props {
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
  const url  = `${GRAVATAR_URI}/${hash}?${queryString.stringify({
    s: props.size && `${props.size}px` || '80px',
    d: props.defaultImage || '',
    f: props.forceDefault && 'y',
    r: props.rating || 'g',
  })}`;

  return (
    <img src={url} alt={props.title || ''} />
  );
};

export default Gravatar;
