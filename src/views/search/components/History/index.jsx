import './index.scss'



export default (props) => {

    const { data, onSearch } = props

    const search = (value) => {
        onSearch && onSearch(value)
    }

    return (
        <div className="search-history-container">
            {data.map((history, index) => {
                return (
                    <span key={index} onClick={() => search(history)}>{history}</span>
                )
            })}
        </div>
    )
}