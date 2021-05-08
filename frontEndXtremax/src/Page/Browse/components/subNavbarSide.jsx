import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DATA } from '../../../redux/actions/GetData'

const SubNavbarSide = () => {
    const [filter] = React.useState(['filter 1', 'filter 2', 'filter 3'])
    const dispatch = useDispatch()
    const data = useSelector(state => state.GetData)

    React.useEffect(() => {
        dispatch(GET_DATA())
    }, [dispatch])


    // render filter by favorite
    const renderFilter = (item, i) => {
        return (
            <option className="dropdown-title" value={item} key={i}>{item}</option>
        )
    }

    //Render Data from server
    const renderData = (item, i) => {
        if (item.tags.length === 0) {
            return (
                <div className="content-box" key={i}>
                    <button onClick={() => {
                        data.data.map(el => {
                            if (el.place_name === item.place_name) {
                                el.flag = !el.flag
                                dispatch({
                                    type: 'SET_SINGLE_DATA',
                                    result: el
                                })
                            } else {
                                el.flag = false
                            }
                            return el
                        })
                    }}
                        className="title-content-box">
                        <p className="text-content">{item.place_name}</p>
                    </button>
                </div>
            )
        } else {
            return (
                <div className="content-box" key={i}>
                    {/* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react */}
                    <button onClick={() => {
                        const changeFlag = data.data.map(el => {
                            if (el.place_name === item.place_name) {
                                el.flag = !el.flag
                                dispatch({
                                    type: 'SET_SINGLE_DATA',
                                    result: el
                                })
                            } else {
                                el.flag = false
                            }
                            return el
                        })
                        dispatch({
                            type: 'SET_DATA',
                            payload: changeFlag
                        })
                    }} className="title-content-box">
                        <p className="text-content">{item.place_name}</p>
                        {
                            item.flag === false ? <i className='fas fa-caret-down icon-arrow' ></i> : <i className='fas fa-caret-up icon-arrow' ></i>

                        }
                    </button>
                    {
                        item.flag ? (<div className="subcontent-box">
                            {
                                item.tags.map((el, i) => {
                                    return renderContent(el, i)
                                })
                            }
                        </div>) : null
                    }

                </div>
            )
        }
    }

    const renderContent = (item, i) => {
        return (
            <p className="text-subcontent" key={i}>{item}</p>
        )
    }
    return (
        <div className="sub-navbar-side">
            <div className="dropdown-box">
                <select className="dropdown ">
                    <option className="dropdown-title" >Filter By Favorite</option>
                    {
                        filter.map((el, i) => {
                            return renderFilter(el, i)
                        })}
                </select>
            </div>
            <div className="box">
                <div className="title-name">
                    <p className="text-name">{data.single_data.place_name}</p>
                </div>
            </div>
            {
                data.data.map((el, i) => {
                    return renderData(el, i)
                })
            }
        </div>
    )
}

export default SubNavbarSide