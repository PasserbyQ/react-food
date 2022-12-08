import './index.scss'
import { Grid } from 'antd-mobile'

export default (props) => {

    const { onCategory } = props

    const categorys = [
        {
            name: '家常菜',
            icon: 'jcc'
        },
        {
            name: '烘焙',
            icon: 'hb'
        },
        {
            name: '素食',
            icon: 'ss'
        },
        {
            name: '下饭菜',
            icon: 'xfc'
        },
        {
            name: '面食',
            icon: 'ms'
        },
        {
            name: '凉菜',
            icon: 'lc'
        },
        {
            name: '小吃',
            icon: 'xc'
        },
        {
            name: '水果',
            icon: 'sg'
        },
    ]

    return (
        <div className="home-category">
            <Grid className='grid' columns={4} gap={8}>
                {categorys.map((item, index) => {
                    return (
                        <Grid.Item key={index} onClick={() => onCategory(item.name)}>
                            <div className='item'>
                                <img className='image' src={require(`@/assets/home/category_${item.icon}.png`)} />
                                <span className='name'>{item.name}</span>
                            </div>
                        </Grid.Item>
                    )
                })}
            </Grid>
        </div>
    )
}