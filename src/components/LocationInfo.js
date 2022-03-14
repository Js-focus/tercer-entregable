import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ResidentsList from './ResidentsList'; 
import SearchBox from './SearchBox';

const LocationInfo = () => {
    const [searchUrl, setSearchUrl] = useState(`https://rickandmortyapi.com/api/location/`);
    const {data: location, setData} = useFetch(searchUrl);    

    useEffect(()=>{
        const aleatoryLocation = Math.floor(Math.random() * 127);
        setSearchUrl(searchUrl => searchUrl + aleatoryLocation
        )        
    },[])

    return (
        <div className='contain'>

            <SearchBox setData= {setData} />
            
            <div className="title">
                <h1>
                    Travel to other world whit Rick and Morty
                </h1>
            </div>

            <div className='local-info'>
                <h1> {location?.name} </h1>
            
                <ul>
                    <li> <strong>Type: </strong> {location?.type} </li>
                    <li> <strong>Dimension: </strong> {location?.dimension} </li>
                    <li> <strong>Population: </strong> {location?.residents?.length} </li>
                </ul>
            
            </div>

            <ResidentsList residents = {location?.residents} />
        </div> 
    );
};

export default LocationInfo;