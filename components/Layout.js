import Header from "./Header"
import Meta from "./Meta"
import Nav from "./Nav"

const Layout = ({children}) => {
    return(
        <>
        <Meta />
        <Nav />
        <Header />
        {children}
        </>
    )
}

export default Layout