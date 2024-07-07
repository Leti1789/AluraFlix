import Header from "../../components/Header/Header"
import GlobalContextProvider from "../../context/GlobalContext"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
  return (
    <main>
      <Header />
      <GlobalContextProvider>
        <Outlet/>
      </GlobalContextProvider>
      <Footer/>
    </main>
  )
}

export default PaginaBase