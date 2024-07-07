import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo.jsx";
import Player from "./pages/Player/Player.jsx";
import Error from "./pages/Error/Error.jsx";
import PaginaBase from "./pages/PaginaBase/PaginaBase.jsx";




const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route strict path="/" element={<PaginaBase/>}>
        <Route strict index element={<Home />}></Route>
        <Route strict path=":id" element ={<Player/>}></Route>
        <Route strict path="nuevoVideo" element={<NuevoVideo />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes