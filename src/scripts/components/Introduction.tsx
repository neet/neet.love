import * as React from 'react';
// import Polygon from './Polygon';
import IntroductionHeader from './IntroductionHeader';
import Links from './Links';
import marked from 'marked';
const 自分語り = require('../../config/自分語り.md');
// import WaifuCard from './WaifuCard';

const 前川みく = require('../../images/前川みく.png');
const 美樹さやか = require('../../images/美樹さやか.png');

export default class Introduction extends React.PureComponent {

  waifu = [
    {
      name: '前川みく',
      description: 'みくはこう見えて真面目なアイドルにゃ! これからも頑張るにゃ!',
      href: 'https://dic.pixiv.net/a/%E5%89%8D%E5%B7%9D%E3%81%BF%E3%81%8F',
      avatar: 前川みく,
    },
    {
      name: '美樹さやか',
      description: 'あたしって、ほんとバカ',
      href: 'https://ja.wikipedia.org/wiki/%E7%BE%8E%E6%A8%B9%E3%81%95%E3%82%84%E3%81%8B',
      avatar: 美樹さやか,
    },
  ];

  render () {
    return (
      <div className='introduction'>
        <IntroductionHeader />

        <div className='introduction-content'>
          <div dangerouslySetInnerHTML={{ __html: marked(自分語り) }} />
        </div>

        <Links />

      </div>
    );
  }

}
