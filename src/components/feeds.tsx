import * as React from 'react';
import fetchRss from '../utils/fetch_rss';

interface Props {
  feedUri: string;
}

interface State {
  items: feedparser.Item[];
}

export default class Feeds extends React.PureComponent<Props, State> {
  public state = {
    items: [],
  };

  public componentDidMount () {
    fetchRss(this.props.feedUri);
  }

  public render () {
    if ( !this.state.items ) {
      return <p>よみこみちゅうですお</p>;
    }

    return <div>あああ</div>;
  }
}
