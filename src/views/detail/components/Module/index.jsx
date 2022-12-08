import './index.scss'

export default (props) => {

    const { title } = props

    return (
        <div className='detail-module'>
            <div className='title'>{ title }</div>
            {props.children}
        </div>
    )
}