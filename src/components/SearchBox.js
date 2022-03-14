import axios from 'axios';
import React, { useState } from 'react';
import SearchList from './SearchList';

const SearchBox = ({setData}) => {
    const [search, setSearch] = useState(""); 
    

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${search}`)
        .then(res => setData(res.data.results[0]))    
    }

    return (
        <div className='search-box'>
            <div className='box-contain'>
                <input
                    type="text" 
                    placeholder='travel to...' 
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress = {e => {
                        if(e.key === "Enter"){
                            searchType();
                        }
                    }}
                    value={search}
                />
                <div>
                    <button onClick={searchType}>
                        lest go Morty! 
                    </button>
                </div>    
            </div>
        </div>
    );
};

export default SearchBox;