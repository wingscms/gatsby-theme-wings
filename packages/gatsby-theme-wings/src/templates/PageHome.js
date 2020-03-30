import React from 'react';
import { PageTemplate } from 'gatsby-theme-wings';

export default props => (
  <PageTemplate {...props}>
    <PageTemplate.Navigation />
    <PageTemplate.Title />
    <PageTemplate.Main />
  </PageTemplate>
);
