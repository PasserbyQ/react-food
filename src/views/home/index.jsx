import './index.scss'
import SearchBar from "./components/SearchBar"
import Category from './components/Category'
import Header from './components/Header'
import FoodItem from './components/FoodItem'
import { Grid } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getHots, getNew } from "@/store/store/actions";
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'


const Home = (props) => {
    const { getHots, getNew } = props
    const [hots, setHots] = useState([])
    const [newList, setNewList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getHots().then(res => {
            setHots(res)
        })
        getNew().then(res => {
            setNewList(res)
        })
    }, [])

    const detail = (item) => {
        navigate(`detail/${item.id}`)
    }

    const categoryClick = (category) => {
        navigate('search', { state: { category } })
    }

    const search = () => {
        navigate('search')
    }

    return (
        <div className="home-container">
            <SearchBar search={search}></SearchBar>
            <Category onCategory={categoryClick}></Category>
            {/* 热门推荐 */}
            <Header title='热门推荐'></Header>
            <Grid className='hot' columns={2} gap={16}>
                {hots.map((item, index) => {
                    return (
                        <Grid.Item key={index} onClick={() => { detail(item) }}>
                            <FoodItem title={item.title} src={item.image}></FoodItem>
                        </Grid.Item>
                    )
                })}
            </Grid>
            {/* 最新推荐 */}
            <Header title='最新推荐'></Header>
            <Grid className='hot' columns={2} gap={16}>
                {newList.map((item, index) => {
                    return (
                        <Grid.Item key={index} onClick={() => { detail(item) }}>
                            <FoodItem title={item.title} src={item.image}></FoodItem>
                        </Grid.Item>
                    )
                })}
            </Grid>
        </div>
    )
}

export default connect((state) => state.food, {
    getHots,
    getNew
})(Home)