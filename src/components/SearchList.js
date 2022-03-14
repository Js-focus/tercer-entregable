import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchList = ({search}) => {
    //se tienen 7 paginas en las que estan los 126 planetas
    const [idPage, setIdPage] = useState(0)
    const planets = [""]
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location?page=${idPage}`)
        .then(res => {
            for( let i = 0; i <= 19; i++){
            planets.push(`"${res.data.results?.[i]?.name}"`)
        }})
       
    },[ idPage ])        
    
    return (
        <div>
                
        </div>
    );

};    

export default SearchList;