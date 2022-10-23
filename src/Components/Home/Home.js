import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Destination from '../Destination/Destination';

const Home = () => {
    const destinations = useLoaderData()
    console.log(destinations)
    return (
        
        <div className='grid grid-cols-3 gap-3 mx-5 mt-5'>
         {
             destinations.map(destination => <Destination
             key={destination.id}
             destination={destination}
            ></Destination>)
         }
        </div>
    );
};

export default Home;