import React from 'react'

import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mt-32">{children}</main>
            <footer></footer>
        </>
    )
}

export default Layout
