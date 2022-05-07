import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleUp,FaRegArrowAltCircleDown, FaDoorClosed } from "react-icons/fa";

const Lift = () => {
    const [colorUp,setColorUp] = useState('white');
    const [colorDown,setColorDown] = useState('white')
    const [closed,setClosed] = useState('Green');
    let [counter, setCounter] = useState(0)
    let [counterB,setCounterB] = useState(0)
   const table = [10,9,8,7,6,5,4,3,2,1,0]
    let [tableB,setTableB]=useState([])
    let tableC = []
    tableC.push(tableB)

   const floorCounter =()=>{
       let index;
      for(let i=0;i<tableC.length;i++){
          console.log(tableC[i])
          index = tableC[i]
         let index1= JSON.stringify(index)
         let char = index1[index1.length -2]
         let charger = parseInt(char)
          console.log(charger  ,"INDEX")
          if(counter >charger){
              setColorUp('Blue')
              setColorDown('white')
          }else {
              setColorDown('orange')
              setColorUp('white')
          }
       }
   }
  return (
    <div className='Lift' style={{marginTop:"80px"}}>
      <div className='inDiv'>
        <span><FaRegArrowAltCircleUp className='upButton' style={{fontSize:"50px", backgroundColor:colorUp,marginRight:"20px"}}/></span>
        <span><FaDoorClosed style={{fontSize:"50px", backgroundColor:closed}}/></span>
        <span ><FaRegArrowAltCircleDown style={{fontSize:"50px", marginLeft:'20px', backgroundColor:colorDown}}/></span>
      <div className='floors'>
          {
            table.map((num)=>{
              return (
                <button onClick={()=>{
                  setCounter(counter = num)
                    console.log(counter)
                  setTableB(tableB + '' + num)
                    console.log(tableC)
                  floorCounter()}}>{num}</button>)})
           }
       </div>
      </div>
    </div>
  )
}
export default Lift