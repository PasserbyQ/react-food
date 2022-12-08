import './index.scss'
import { useLocation, useNavigate } from "react-router-dom"
import NavBar from './components/NavBar'
import History from './components/History'
import Header from './components/Header'
import { useState } from 'react'
import storage from '@/utils/storage'
import { useEffect } from 'react'
import SearchItem from './components/SearchItem'
import { DotLoading, Empty, Grid } from 'antd-mobile'
import FoodItem from '../home/components/FoodItem'
import { seardhFood } from '../../api/food'


export default () => {
    const KEY = 'historys'

    const [dataList, setDataList] = useState([])
    const [historyData, setHistoryData] = useState([])
    const [searchTxt, setSearchTxt] = useState('')
    const [dataState, setDataState] = useState(0) // 0 : history 1 : loading 2 : data
    const location = useLocation()
    const { state } = location
    const navigate = useNavigate()

    useEffect(() => {
        const historys = storage.get(KEY)
        historys && setHistoryData(historys)
        if (state && state.category) {
            search(state.category)
        }
    }, [])

    const localStorage = (value) => {
        const historys = storage.get(KEY)
        if (historys && historys.length) {
            const index = historys.indexOf(value)
            if (index !== -1) {
                const item = historys[index];
                historys.splice(index, 1)
                historys.unshift(item);
            } else {
                historys.push(value)
            }
            storage.set(KEY, historys)
            setHistoryData(historys)
        } else {
            const list = [value]
            storage.set(KEY, list)
            setHistoryData(list)
        }
    }

    const search = (value) => {
        if (!value) return
        setSearchTxt(value)
        localStorage(value)
        setDataState(1)
        seardhFood(value).then(res => {
            setDataList(res)
            setDataState(2)
        })
    }

    const deleteHistory = () => {
        storage.remove(KEY)
        setHistoryData([])
    }

    const detail = (item) => {
        navigate(`/detail/${item.id}`)
    }


    return (
        <div className="search-container">
            <NavBar searchTxt={searchTxt} search={search}></NavBar>
            <div style={{ 'marginTop': '45px' }}>
                {
                    dataState === 0 ? historyData && historyData.length ?
                        <>
                            <Header title="历史记录" onDelete={deleteHistory}></Header>
                            <History data={historyData} onSearch={search} ></History>
                        </>
                        :
                        <Empty
                            style={{ padding: '64px 0' }}
                            imageStyle={{ width: 100, color: '#F76D7C' }}
                            description='请搜索您想要的食谱～'
                        />
                        :
                        dataState === 1 ? <DotLoading className='loading' color='#F76D7C' />
                            : dataList && dataList.length ?
                                <Grid className='hot' columns={2} gap={16}>
                                    {dataList.map((item, index) => {
                                        return (
                                            <Grid.Item key={index} onClick={() => { detail(item) }}>
                                                <FoodItem title={item.title} src={item.image}></FoodItem>
                                            </Grid.Item>
                                        )
                                    })}
                                </Grid>
                                :
                                <Empty
                                    style={{ padding: '64px 0' }}
                                    imageStyle={{ width: 100, color: '#F76D7C' }}
                                    description='暂无相关食谱，请搜索其他食谱'
                                />
                }
            </div>
        </div>
    )
}