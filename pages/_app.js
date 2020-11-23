import '../styles/global.css'

import Head from 'next/head'
import Layout from '../components/Layout'
import HeaderConfig from '../config/header'

function App({ Component, pageProps, router }) {
    const layoutConfig = HeaderConfig[router.pathname]
    return (
        <Layout {...layoutConfig}>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css?family=Merriweather:400,500,700"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto+Mono:400"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css?family=Mulish:300,400"
                    rel="stylesheet"
                ></link>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
