import React from 'react'
import SubNavbarSide from './components/subNavbarSide'
import Map from './components/Map'
import Card from './components/Card'
import {useSelector} from 'react-redux'

const Browse = () => {
    const data = useSelector((state)=> state.GetData.single_data.flag)
    console.log(data)
    return (
        <div className="browse">
            <SubNavbarSide />
            <div className="map-page">
                <div className="title-map-box">
                    <p className="title-map">TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</p>
                    <div className="icon-grup">
                        <i className="fas fa-cog icon-header"></i>
                        <i className="fas fa-question-circle icon-header"></i>
                        <i className="fas fa-times-circle icon-header"></i>
                    </div>
                </div>
                <div className="maps-content">
                    <Map />
                    {
                        !data ? null : <Card />
                    }
                </div>
            </div>
        </div>
    )
}
export default Browse