import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [residentIfo, setResidentInfo] = useState(null);
   
    useEffect(()=>{
        axios.get(url)
        .then(res => setResidentInfo(res.data) )
    },[url])
    
    
    return (
        <div className='resident-info'>
            <h2> {residentIfo?.name} </h2>
            <img src={residentIfo?.image} alt="" />
            <ul>
                <li> {residentIfo?.status} </li>
                <li> {residentIfo?.origin?.name} </li>
                <li> {residentIfo?.episode?.length} </li>
            </ul>
        </div>
    );
};

export default ResidentInfo;