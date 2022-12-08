import { Ellipsis } from 'antd-mobile'
import './index.scss'

export default (props) => {

    const { title, src } = props

    return (
        <div className="home-item">
            <img className='image' src={src} alt="" />
            <Ellipsis className='title' direction='end' content={title} />
        </div>
    )
}