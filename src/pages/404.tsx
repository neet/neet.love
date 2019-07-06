import { Link } from 'gatsby';
import React from 'react';
import { Single }from '../layouts/single';

const NotFoundPage = () => (
  <Single>
    <article>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </article>
  </Single>
);

export default NotFoundPage;
