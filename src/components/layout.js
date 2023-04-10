import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;