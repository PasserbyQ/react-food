import './index.scss'

export default (props) => {

    const { title, right, more } = props

    const onMore = () => {
        more && more()
    }

    return (
        <div className="home-header">
            <span className='title'>{title}</span>
            {right &&
                <div className='right' onClick={onMore}>
                    <span>更多</span>
                    <img src={require('@/assets/home/more.png')} alt="" />
                </div>
            }
        </div>
    )
}