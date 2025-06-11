import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, headerTransparent = false, pageTitle = "Wbify" }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header transparent={headerTransparent} siteTitle={pageTitle} />
      
      <main style={{ flex: 1 }}>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout