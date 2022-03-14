import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {

    return (
        <div className='residents-list'>
            {
                residents?.map(resident => (
                    <ResidentInfo url={resident} key={resident} />   
                ))
            }
        </div>
    );
};

export default ResidentsList;