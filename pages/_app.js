import '../styles/global.css'

import Head from 'next/head'

import Layout from '../components/Layout'

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
