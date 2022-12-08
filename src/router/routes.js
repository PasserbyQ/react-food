
import { Outlet, useRoutes } from 'react-router-dom'
import Tabbar from '../components/Tabbar'
import Home from '@/views/home';
import Personal from '@/views/personal';
import Detail from '@/views/detail';
import Search from '@/views/search';

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Tabbar />,
            children: [
                {
                    path: '',
                    element: <Home />,
                },
                {
                    path: 'personal',
                    element: <Personal />,
                },
            ]
        },
        {
            path: '/detail/:id',
            element: <Detail />,
        },
        {
            path: '/search',
            element: <Search />,
        }
    ]);
    return routes;
}

export default Routes