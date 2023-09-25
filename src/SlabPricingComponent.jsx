import React, { useState } from 'react'

export const SlabPricingComponent = () => {
    const [tableData, setTableData] = useState([{
        startingQuantity:1,lastQuantity:"",price:""
    }])
    const submitForm = (e)=>{
       e.preventDefault();
       setTableData({

       })
    }
  return (
    <div className='card'>
        <form onSubmit={(e)=>{submitForm(e)}}>
            <SlabTable/>
        </form>
    </div>
  )
}
const SlabTable =()=>{
    return(
         <table border={1}>
            <thead>
                <th>starting quantity</th>
                <th>last quantity</th>
                <th>price</th>
            </thead>
            <tbody>
               <tr>
               <td><input type="number" value={1} placeholder='starting quantity'/></td>
               <td><input type="number" placeholder='last quantity' /></td>
               <td><input type="number" placeholder='price' /></td>
               </tr>
            </tbody>
         </table>
    )
}