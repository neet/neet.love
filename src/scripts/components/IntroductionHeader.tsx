import * as React from 'react';

const chihiro = require('../../images/AtomicChihiro.png');

export default class IntroductionHeader extends React.PureComponent {

  render () {
    return (
      <header className='introduction-header'>
        <div className='introduction-header__avatar'>
          <img src={chihiro} style={{ borderRadius: '50%' }} alt='千尋ちゃんです' />
        </div>

        <div className='introduction-header__meta'>
          <h2 className='introduction-header__name'>
            Neetshin
          </h2>

          <span className='introduction-header__alias'>
            新都心
          </span>
        </div>
      </header>
    );
  }

}
