import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchList = ({search, setSearch}) => {
    //se tienen 7 paginas en las que estan los 126 planetas
    const [suggestionSearch, setSuggestionSearch] = useState([])
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location?name=${search}`)
        .then(res => setSuggestionSearch(res.data.results))
    },[search])
    const suggestionClick = (name) =>{
        setSearch((name.nativeEvent.path[0]).textContent);
        setSuggestionSearch([])
    }
    return (
    
            <> 
                {
                suggestionSearch.filter(val=> {
                    if(search === ""){
                        
                    }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    return search
                }).map(sSearch => {
                    return(
                    <div key={sSearch.name} className="box-suggestion">
                        <button onClick={suggestionClick} className="button-suggestion">
                            {
                                sSearch.name
                            }
                        </button>
                    </div>)
                })
                } 
            </>
    
    );

};    

export default SearchList;