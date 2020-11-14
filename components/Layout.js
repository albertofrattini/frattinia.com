import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mt-24 mx-auto w-full max-w-3xl p-8">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
