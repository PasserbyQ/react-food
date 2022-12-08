import { Ellipsis } from 'antd-mobile'
import { useMemo } from 'react'
import './index.scss'

export default (props) => {

    const { data, onClick } = props

    const handleNumber = (value) => {
        if (value > 10000) {
            return `${(value / 10000).toFixed(1)}万`
        }
        return value
    }

    const numberData = useMemo(() => {
        const { views, collect } = data
        const v = handleNumber(views)
        const c = handleNumber(collect)
        return { views: v, collect: c }
    }, [data])

    return (
        <div className="search-item" onClick={onClick}>
            <img className='image' src={data.image} alt="" />
            <div className='content'>
                <span>
                    <Ellipsis className='title' direction='end' content={data.title} />
                    <Ellipsis className='desc' direction='end' content={data.desc} />
                </span>
                <span>
                    <span className='views'>{numberData.views}浏览</span>
                    <span className='collect'>{numberData.collect}收藏</span>
                </span>
            </div>
        </div>
    )
}