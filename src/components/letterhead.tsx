import * as React from 'react';

const Letterhead: React.SFC = ({ children }) => (
  <aside className='letterhead'>
    {children}
  </aside>
);

export default Letterhead;
