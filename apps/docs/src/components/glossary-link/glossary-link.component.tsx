import * as React from 'react';

export interface IGlosarryLinkProps extends React.PropsWithChildren {
  pathToGlossary?: string;
}

export type GlosarryLinkComponent = React.FC<IGlosarryLinkProps>;

export const GlosarryLink: GlosarryLinkComponent = (props) => {
  const url = props.pathToGlossary + props.children.toString().toLowerCase();

  return <a href={url}>{props.children}</a>;
};

GlosarryLink.displayName = 'GlosarryLink';

GlosarryLink.defaultProps = {
  pathToGlossary: '/docs/glossary#',
};

export const GLink = GlosarryLink;
