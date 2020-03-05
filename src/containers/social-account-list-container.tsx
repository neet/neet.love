import { graphql, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';

import { SocialAccountList } from '../components/social-account-list';
import { SocialAccount } from '../types';

interface SocialAccountQueryData {
  allSocialAccountsYaml: {
    edges: {
      node: SocialAccount;
    }[];
  };
}

export interface SocialAccountListContainerProps {
  limit?: number;
  onlySuggested?: boolean;
}

export const SocialAccountListContainer = ({
  onlySuggested,
  limit,
}: SocialAccountListContainerProps) => {
  const data = useStaticQuery<SocialAccountQueryData>(graphql`
    query SocialAccountQuery {
      allSocialAccountsYaml {
        edges {
          node {
            id
            copyable
            url
            label
            name
            suggested
            type
          }
        }
      }
    }
  `);

  const socialAccounts = useMemo(
    () =>
      data.allSocialAccountsYaml.edges
        .map(edge => edge.node)
        .filter(node => (onlySuggested ? node.suggested : true))
        .slice(0, limit),
    [data, limit, onlySuggested],
  );

  const isPartial = useMemo(() => !!(onlySuggested || limit), [
    onlySuggested,
    limit,
  ]);

  return (
    <SocialAccountList socialAccounts={socialAccounts} isPartial={isPartial} />
  );
};
