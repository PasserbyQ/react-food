import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFoodDetail } from '@/api/food'
import Module from './components/Module'
import './index.scss'
import { DotLoading } from 'antd-mobile'

export default () => {
    const [info, setInfo] = useState({})
    const [dataState, setDataState] = useState(0) // 0 : loading 1 : data
    const navigate = useNavigate()
    const routeParam = useParams()


    useEffect(() => {
        const { id } = routeParam
        getFoodDetail(id).then(res => {
            setDataState(1)
            setInfo(res)
        })
    }, [])

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="detail-container">
            <div className='nav-bar' >
                <div className='back' onClick={back}>
                    <img src={require('@/assets/home/more.png')} alt="" />
                </div>
            </div>

            {
                dataState ?
                    <>
                        <img className='cover' src={info.image} alt="" />

                        <div className='content'>
                            <div className='name'>{info.title}</div>
                            <Module title='心得'>
                                <div className='desc'>
                                    {info.story}
                                </div>
                            </Module>

                            <Module title='用料'>
                                <div className='material'>
                                    {
                                        info.materials.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{item.name}</span>
                                                    <span>{item.quantity}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            </Module>

                            <Module title='做法'>
                                {info.steps.map((item, index) => {
                                    return (
                                        <div className='step' key={index}>
                                            <div className='index'>{index + 1}.{item.step}</div>
                                            <img src={item.image} alt="" />
                                        </div>
                                    )
                                })}
                            </Module>
                            {
                                info.tips && <Module title='小贴士'>
                                    <div className='tips desc'>{info.tips}</div>
                                </Module>
                            }


                        </div>
                    </>
                    :
                    <DotLoading className='loading' color='#F76D7C' />
            }


        </div>
    )
}