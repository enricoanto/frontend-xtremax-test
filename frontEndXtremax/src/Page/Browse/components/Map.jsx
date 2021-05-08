import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'

// https://github.com/JustFly1984/react-google-maps-api/tree/master/packages/react-google-maps-api

const containerStyle = {
    width: '100%',
    height: '84.8vh'
};

const center = {
    lat: 1.290270,
    lng: 103.851959
};
export default () => {
    const data = useSelector((state => state.GetData))

    const dispatch = useDispatch()

    const renderPoint = (el, i) => {
        return (
            <div key={i.toString()}>
                {/* https://stackoverflow.com/questions/27488643/google-maps-v3-default-marker-path-with-other-colors */}
                {
                    el.flag === false ? <Marker onClick={() => clickPoint(el)}
                        position={{ lat: el.latitude, lng: el.longitude }}
                        icon={{
                            path:
                                'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
                            fillColor: '#eb5a59',
                            fillOpacity: 1.0,
                            strokeWeight: 0,
                            scale: 1
                        }}
                       ></Marker>: <Marker onClick={() => clickPoint(el)}
                            position={{ lat: el.latitude, lng: el.longitude }}
                            icon={{
                                path:
                                    'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
                                fillColor: '#eb5a59',
                                fillOpacity: 1.0,
                                strokeWeight: 0,
                                scale: 3
                            }}
                    />
                }
            </div>
        )
    }

    const clickPoint = (item) => {
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
    }
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBolrVYEIVX3I47jxP8zEgpXEcoiquUxPE"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onZoomChanged={17}>
                {
                    data.data.map((el, i) => {
                        return (renderPoint(el, i))
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}
