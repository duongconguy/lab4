import React from 'react'
import TableItem from './TableItem';

function Table(props) {

    return (
        <table cellPadding ="5" className='w-full my-[10px] border border-slate-300'>
            <tr className=''>
                <th className='w-[5%] border border-slate-300'>ID</th>
                <th className='w-[20%] border border-slate-300'>Name</th>
                <th className='w-[35%] border border-slate-300'>Description</th>
                <th className='w-[10%] border border-slate-300'>Price</th>
                <th className='w-[30%] border border-slate-300'>Action</th>
            </tr>

            { props.user.map((item,index) =>(
            <TableItem 
                user ={item} 
                key = {index} 
                index={index} 
                OpenReadModal = {props.OpenReadModal}
                OpenEditModal = {props.OpenEditModal}
                OpenDeleteModal = {props.OpenDeleteModal} 
                setIndex = {props.setIndex}/>
            ))}
        </table>
    );
  }
  
  export default Table;