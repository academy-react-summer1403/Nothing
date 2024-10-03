import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Layout = () => {
  return (
    <div className='dark:bg-[#241e53] transition-colors duration-300'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;