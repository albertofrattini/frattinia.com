import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <Header title={title} subtitle={subtitle} />
            <main className="mt-0 mx-auto w-full max-w-2xl p-6">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
