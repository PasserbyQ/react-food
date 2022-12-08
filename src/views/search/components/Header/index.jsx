import './index.scss'

export default (props) => {

    const { title, right, onDelete } = props

    const onRight = () => {
        onDelete && onDelete()
    }

    return (
        <div className="search-header">
            <span className='title'>{title}</span>
            <div className='right' onClick={onRight}>
                <img src={require('@/assets/home/delete.png')} alt="" />
            </div>
        </div>
    )
}