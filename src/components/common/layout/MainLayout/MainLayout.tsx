import Header from "../../header/Header"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main"> <Outlet /></main>
    </>
  )
}

export default MainLayout