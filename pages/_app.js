import '../styles/global.css';

import Head from 'next/head';
import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta content="#ffffff" name="theme-color" />
                <meta content="#ffffff" name="msapplication-TileColor" />
                <meta
                    content="/static/favicons/browserconfig.xml"
                    name="msapplication-config"
                />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
