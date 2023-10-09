import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layouts/Root'
import Details from '../pages/Details/Details'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoutes from './PrivateRoutes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details /></PrivateRoutes>,
                loader: () => fetch('data.json')
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
])

export default router
