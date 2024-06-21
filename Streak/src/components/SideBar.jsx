import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function SideBar() {
    const navigate = useNavigate()
    const [checkSubOption , setCheckSubOption] = useState(false);
    const sideBarOption = [
        {
            key:"Option 1",
            value:"option 1",
            img: <FaHome />,
            subOption:[],
        },
        {
            key:"Option 2",
            value:"option 2",
            img: <MdHomeRepairService />,
            subOption:[],
        },
        {
            key:"Option 3",
            value:"option 3",
            img: <FaHome />,
            subOption:[
                {
                    key:"SubOption 1",
                    value:"SubOption 1",
                    img: <FaHome />,
                    subOption:[],
                },
                {
                    key:"SubOption 2",
                    value:"SubOption 2",
                    img: <FaHome />,
                    subOption:[],
                },
                {
                    key:"SubOption 3",
                    value:"SubOption 3",
                    img: <FaHome />,
                    subOption:[],
                },
            ],
        },
        {
            key:"Option 4",
            value:"option 4",
            img: <FaHome />,
            subOption:[],
        }
    ]

  return (
    <div className='sideBarMainContainer'>
        {sideBarOption?.map((sideOption)=>{
            return (
                <div key={sideOption.key} className='sideBarOptionMainContainer'>
                   <div onClick={()=>{setCheckSubOption(true); navigate("/random") }} className='sideBarOptionContainer'>
                    {sideOption?.img} {" "}
                    {sideOption?.key} {" "}
                   {sideOption?.subOption?.length > 0 && <IoIosArrowDown />} 
                   </div>
                    {sideOption?.subOption?.length > 0 && checkSubOption &&
                      <div className='sideBarSubOptionMainContainer'>
                        {sideOption?.subOption?.map((sideSubOption)=>{
                            return(
                                <div key={sideSubOption.key} onClick={()=>setCheckSubOption(false)} className='sideBarSubOptionContainer'>
                                    {sideSubOption?.img} {" "}
                                    {sideSubOption?.key}
                                </div>
                            )
                        })}
                        </div>
                    }
                </div>
            )
        })}
    </div>
  )
}

export default SideBar;