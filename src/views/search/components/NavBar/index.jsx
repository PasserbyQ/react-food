import './index.scss'
import { Input, NavBar } from "antd-mobile"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'


export default (props) => {

    const { searchTxt, search } = props
    const navigate = useNavigate()
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(searchTxt)
    }, [searchTxt])

    const back = () => {
        navigate(-1)
    }

    const right = (
        <div style={{ fontSize: 16, color: '#ffffff' }} onClick={() => search(value)}>
            搜索
        </div>
    )


    return (
        <NavBar className='search-nav' right={right} onBack={back}>
            <div className="search-bar">
                <img className='image' src={require('@/assets/home/search.png')} />
                <Input
                    style={{ '--font-size': '15px' }}
                    className='input'
                    placeholder='搜食材、菜名、分类'
                    value={value}
                    clearable
                    onChange={val => {
                        setValue(val)
                    }}
                />
            </div>
        </NavBar>
    )
}