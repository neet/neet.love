import * as React from 'react';

interface Props {
  title: string;
  excerpt?: string;
  insertBefore?: React.ReactNode;
  children?: React.ReactNode;
}

const Page: React.SFC<Props> = ({title, excerpt, children, insertBefore}) => (
  <article className='page'>
    <header className='page__header' role='banner'>
      {insertBefore}

      <div className='page__hgroup'>
        <h1 className='page__title'>
          {title}
        </h1>

        {
          excerpt && (
            <span className='page__excerpt'>
              {excerpt}
            </span>
          )
        }
      </div>
    </header>

    <hr className='page__separetar' aria-hidden />

    {children}
  </article>
);

export default Page;
