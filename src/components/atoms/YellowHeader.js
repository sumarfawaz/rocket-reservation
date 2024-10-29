import React from "react";

function YellowHeader({text}){
    return(
             <div className=' items-center lg:items-center justify-content-center'>
                 <h4 className='section-yellow-text lg:ml-3 text-center'>{text}</h4>
            </div> 
    );
}

export default YellowHeader;