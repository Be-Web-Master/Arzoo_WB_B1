import React, { useState } from 'react'

export const ExpirayDateComponent = () => {
    const [data, setData] = useState([{
        date:"",quantity:''
    }])

    const handleSubmit =(e)=>{
     e.preventDefault();
     setData([...data,{
        date: e.target.date.value,
        quantity: e.target.quantity.value
     }])
    }
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="date" name="date" id="addDate" />
        <input type="number" name='quantity' placeholder='quantity'/>
        <button type='submit'>+</button>
    </form>
    <TableComp data={data}/>
    </>
  )
}

const TableComp =(props)=>{
    const {data} = props;
 return(
    <>
      <table border={1}>
        <thead>
            <th>Date</th>
            <th>Quantity</th>
        </thead>
        <tbody>
            {data.map((data)=>{
              return(<tr>
                 <td>{data.date}</td>
                 <td>{data.quantity}</td>
               </tr>)
            })}
            
        </tbody>
      </table>
    </>
 )
}