import * as React from 'react';
import { links } from '../../config';
import simpleIcons from 'simple-icons';

export default class Links extends React.PureComponent {

  render () {
    return (
      <div className='links'>
        <ul>
          {
            links.map((link, i: number) => {
              const simpleIcon = simpleIcons[link.icon];

              return (
                <li key={`${name}-${i}`}>
                  <a href={link.href}>
                    { link.name }, { link.username }
                    <img src={simpleIcon.source} alt={link.name} />
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}
