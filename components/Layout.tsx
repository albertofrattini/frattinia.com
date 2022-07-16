import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <Head>
                <title>Alberto Frattini - javascript developer</title>
            </Head>
            <Header />
            <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
