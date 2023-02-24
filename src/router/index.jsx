import { createBrowserRouter } from 'react-router-dom'
import Agentes from '../pages/Agentes'
import Armas from '../pages/Armas'
import Mapas from '../pages/Mapas'
import LayoutPublic from '../layouts/LayoutPublic'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import InicioSesion from '../pages/Login'
import Favoritos from '../pages/Favoritos'
import Skins from '../pages/Skins'
import Register from '../pages/Register'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/agentes',
        element: <Agentes />,
      },
      {
        path: '/armas',
        element: <Armas />,
      },
      {
        path: '/mapas',
        element: <Mapas />,
      },
      {
        path: '/login',
        element: <InicioSesion />,
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/favoritos',
        element: <Favoritos />,
      },
      {
        path: '/armas/:arma',
        element: <Skins />
      }
    ],
  },
])