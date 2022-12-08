import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'

export default () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    const setRouteActive = (value) => {
        navigate(value)
    }

    const tabs = [
        {
            key: '/',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/personal',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return (
        <>
            <div className='tabbar-container'>
                <Outlet></Outlet>
            </div>
            <TabBar className='tabbar' activeKey={pathname} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )

}

