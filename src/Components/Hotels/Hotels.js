import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import './Hotel.css'

const Hotels = () => {
    const hotels = useLoaderData()
    console.log(hotels)
    
    return (
        <div className='flex justify-around mt-5'>
            <div>
                {
                    hotels.map(hotel => <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    ></Hotel>)
                }
            </div>
            <div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="411" height="569" id="gmap_canvas" src="https://maps.google.com/maps?q=cox%20bazar&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHight="0" marginWidth="0"></iframe>
                    <a href="https://fmovies-online.net"></a>
                    <br/>
                    {/* <style>{.mapouter{position:relative;text-align:right;height:569px;width:411px;}}</style> */}
                    {/* <a href="https://www.embedgooglemap.net">google map html widget</a> */}
                    {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:569px;width:411px;}</style> */}
                    </div></div>
            </div>
        </div>
    );
};

export default Hotels;
