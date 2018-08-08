import * as copy from 'copy-to-clipboard';
import * as React from 'react';
import { Link } from '../pages';

interface Props {
  links: Link[];
}

export default class Links extends React.PureComponent<Props> {

  private categorizeLinks = (links: Link[]) => (
    {
      social: links.filter((link) => link.tag === 'social'),
      dev:    links.filter((link) => link.tag === 'dev'),
      donate: links.filter((link) => link.tag === 'donate'),
    }
  )

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const name = e.currentTarget.getAttribute('data-name') as string;
    const link = this.props.links.filter((link) => link.name === name)[0];

    if (link && link.copy) {
      e.preventDefault();
      copy(link.copy);
      alert(`${link.copy}をコピーしました`);
    }
  }

  private renderItem = (link: Link, i: number) => {
    return (
      <li
        className='links__list-item'
        key={`${i}-${link.name}`}
        role='listitem'
        aria-posinset={i + 1}
        aria-setsize={this.props.links.length}
      >
        <div className='link-button-wrapper'>
          <a
            className='link-button'
            href={link.href}
            title={link.label}
            data-name={link.name}
            onClick={this.handleClick}
            target='__blank'
          >
            <div
              className='link-button__fa-wrapper'
              style={{
                backgroundColor: link.color1,
                color: link.color2,
              }}
            >
              <i className={`link-button__fa ${link.fa}`} aria-hidden />
            </div>

            <div className='link-button__text'>
              <h4 className='link-button__name not-special-font'>
                {link.name}
              </h4>

              <p className='link-button__label'>
                {link.label}
              </p>
            </div>
          </a>
        </div>
      </li>
    );
  }

  public render () {
    const links = this.categorizeLinks(this.props.links);

    return (
      <div className='links section'>
        <h3>Contact</h3>
        <ul className='links__list' role='listbox'>
          {links.social.map((link, i) => this.renderItem(link, i))}
        </ul>

        <h3>Development</h3>
        <ul className='links__list' role='listbox'>
          {links.dev.map((link, i) => this.renderItem(link, i))}
        </ul>

        <h3>Donation</h3>
        <ul className='links__list' role='listbox'>
          {links.donate.map((link, i) => this.renderItem(link, i))}
        </ul>
      </div>
    );
  }
}
