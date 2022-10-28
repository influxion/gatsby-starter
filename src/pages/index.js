import * as React from 'react';
import Layout from '../components/global/layout';
import Seo from '../components/global/seo';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
