import * as React from 'react';

interface Props {
  avatar: string;
  name: string;
  description: string;
  href: string;
}

export default class WaifuCard extends React.PureComponent<Props> {

  render () {
    const { avatar, name, description, href } = this.props;

    return (
      <section className='waifu-card'>
        <div className='waifu-card__avatar'>
          <img src={avatar} alt={`${name} - ${description}`} />
        </div>

        <div className='waifu-card__meta'>
          <h3 className='waifu-card__name'>
            <a href={href} target='__blank'>
              {name}
            </a>
          </h3>

          <p className='waifu-card__description'>
            {description}
          </p>
        </div>
      </section>
    );
  }

}
