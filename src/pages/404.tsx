import React from 'react';
import { Link } from 'gatsby';
import IndexLayout from '../layouts';

const NotFoundPage = () => (
  <IndexLayout>
    <article>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </article>
  </IndexLayout>
);

export default NotFoundPage;
