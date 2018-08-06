import * as copy from 'copy-to-clipboard';
import * as React from 'react';
import { Link } from '../pages';

interface Props {
  links: { node: Link }[];
}

export default class Links extends React.PureComponent<Props> {

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const i = e.currentTarget.getAttribute('data-index') as string;
    const link = this.props.links[Number(i)].node;

    if (link.copy) {
      e.preventDefault();
      copy(link.copy);
      alert(`${link.copy}をコピーしました`);
    }
  }

  private renderItem = (link: Link, i: number) => {
    return (
      <li className='links__list-item' key={`${i}-${link.name}`} role='listitem' aria-posinset={i + 1} aria-setsize={this.props.links.length}>
        <div className='link-button'>
          <a
            className='link-button__link'
            href={link.href}
            title={link.label}
            data-index={i}
            onClick={this.handleClick}
          >
            <span className='link-button__fa-wrapper'>
              <i className={`link-button__fa ${link.fa}`} aria-hidden />
            </span>

            <span className='link-button__label'>
              {link.name}
            </span>
          </a>
        </div>
      </li>
    );
  }

  public render () {
    const { links } = this.props;

    return (
      <div className='links section'>
        <ul className='links__list' role='listbox'>
          {links.map(({ node }, i) => this.renderItem(node, i))}
        </ul>
      </div>
    );
  }
}
