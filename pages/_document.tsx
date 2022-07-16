import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700&display=optional"
                    rel="stylesheet"
                ></link>
                <link
                    href="/static/favicons/favicon.ico"
                    rel="shortcut icon"
                />
                <link
                    href="/static/favicons/site.webmanifest"
                    rel="manifest"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
