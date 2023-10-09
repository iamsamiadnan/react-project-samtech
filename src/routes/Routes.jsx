import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layouts/Root'
import Details from '../pages/Details/Details'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoutes from './PrivateRoutes'
import Dashboard from '../pages/Dashboard/Dashboard'
import Notification from '../pages/Notification/Notification'

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
                element: <PrivateRoutes><Details /></PrivateRoutes>
            },
            
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard /></PrivateRoutes>
            },
            {
                path: '/notification',
                element: <PrivateRoutes><Notification /></PrivateRoutes>
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
    {
        path: '*',
        element: <div className='w-full h-screen flex justify-center items-center'><h1>404 NOT FOUND | SAMITECH EXPO</h1></div>
    }
])

export default router
