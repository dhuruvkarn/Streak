import React from 'react';
import "../style/Global.css";

function DropDown({setShowDropDown}) {
    const dropOption = ["Drop1" , "Drop2" , "Drop3"]
  return (
    <div className='dropOptionMainContainer'>
        {dropOption?.map((option,index)=>{
            return(
                <div key={index} className='dropOptionContainer' onClick={()=>setShowDropDown(false)}>
                    {option}
                </div>
            )
        })}
    </div>
  )
}

export default DropDown