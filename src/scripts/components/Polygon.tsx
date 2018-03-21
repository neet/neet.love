import * as React from 'react';

interface Props {
  style?: any;
}

export default class Polygon extends React.PureComponent<Props> {

  public render () {
    return (
      <div className='polygon-wrapper' style={this.props.style} >
        <div className='polygon-outer' />
        <div className='polygon' />
      </div>
    );
  }

}
