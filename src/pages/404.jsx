import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/global/layout';
import Seo from 'components/global/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Link to='/'>Back home</Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title='404' />;
