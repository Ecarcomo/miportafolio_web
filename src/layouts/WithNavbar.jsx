import { Outlet } from 'react-router-dom'
//import Navbar from '../components/navbar/Navbar'


const WithNavbar = () => {
  return (
    <>
    <h2>Header</h2>
        <Outlet/>
    <h2>Footer</h2>
    </>
  )
}

export default WithNavbar