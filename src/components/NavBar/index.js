import { NavBar, Toast } from "antd-mobile"


export default (props) => {
    const { backArrow, titie } = props
    const back = () => {
        Toast.show({
            content: '点击了返回区域',
            duration: 1000,
        })
    }

    return (
        <NavBar backArrow={backArrow} onBack={back}>{titie}</NavBar>
    )
}