import { Image } from 'antd-mobile'
import './index.scss'

export default (props) => {

    const { search } = props

    return (
        <div className="home-search-bar" onClick={search}>
            <img className='image' src={require('@/assets/home/search.png')} />
            <span className="placeholder">搜食材、菜名、分类</span>
        </div>
    )
}