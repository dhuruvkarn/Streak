import React, {  useState } from 'react'
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import Card from '../components/Card';


function Home() {
    const [chartValue , setChartValue] = useState("line")
    const chartOption = [
        {
            key:"Line Chart",
            value:"line"
        },
        {
            key:"Bar Chart",
            value:"bar"
        },
    ];

    const handleSelectValue = (e) =>{
        const {value} = e.target
        setChartValue(value)
    }

  return (
    <div style={{marginTop:"2rem" , width:"90%"}}>
        <select value={chartValue} onChange={handleSelectValue}>
            {chartOption?.map((chart,index)=>{
                return (
                    <option value={chart?.value}>{chart?.key}</option>
                )
            })}
            
        </select>

        {chartValue === "line" && <LineChart/> }
        {chartValue === "bar" && <BarChart/> }
        <Card/>
    </div>
  )
}

export default Home