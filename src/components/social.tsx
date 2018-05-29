import * as React from 'react';
import SocialButton from './social_button';

interface Props {
  socials: { node: Social }[];
}

const Social: React.SFC<Props> = ({ socials }) => {
  return (
    <div className='social'>
      {socials.map(({ node }, i) => <SocialButton key={`${i}-${node.name}`} social={node} />)}
    </div>
  );
};

export default Social;
