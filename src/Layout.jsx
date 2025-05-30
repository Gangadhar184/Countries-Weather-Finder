import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <h1>Countries Explorer </h1>
        <Outlet/>
    </>
  )
}

export default Layout;
