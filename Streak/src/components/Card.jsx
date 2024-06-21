import React from 'react'
import AreaChart from './charts/AreaChart';

function Card() {
    const nameArr = [1,2,3,4]
  return (
    <div className='cardContainer'>
    {nameArr.map((elem)=>{
        return(
            <div key={elem} className='cardMainContainer'>
                <div>Name</div>
                <div>12030</div>
                 <div> <AreaChart/></div>
             </div>
        )
        })}
    </div>
    
  )
}

export default Card