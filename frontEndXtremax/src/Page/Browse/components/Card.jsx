import React from 'react';
import {useSelector} from 'react-redux'

const Card = () => {
    const data = useSelector((state)=>state.GetData.single_data)
    return (
        <div className="card">
            <img src={data.image} alt={data.place_name} className="image" width="300" />
            <div className="card-box">
                <div className="title-card">
                    <p className="text-title-card">{data.place_name}</p>
                </div>
                <p className="text-desc">
                   {data.sub_name}
                </p>
                <p className="text-desc">
                    {data.place_description}
                </p>
                <div className="footer-box">
                    <div className="sub-footer-box">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="footer-text">{data.address}</p>
                    </div>
                    <div className="sub-footer-box">
                        <i className="fas fa-globe-americas" ></i>
                        <p className="footer-text">{data.url}/</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card