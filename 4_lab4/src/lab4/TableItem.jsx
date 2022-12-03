import React from 'react'

function TableItem(props) {
    const user = props.user;

    const btDeleteClick = ()=>{ 
        props.setIndex(props.index)
        props.OpenDeleteModal()}

    const btEditClick = ()=>{ 
        props.setIndex(props.index)
        props.OpenEditModal()}
    
    const btReadClick = ()=>{ 
        props.setIndex(props.index)
        props.OpenReadModal()}

    return (
            <tr className='text-left'>
                <td className=' border border-slate-300'> {user.id} </td>
                <td className=' border border-slate-300'> {user.name} </td>
                <td className=' border border-slate-300'> {user.description} </td>
                <td className=' border border-slate-300'> {user.price} </td>
                <td className=' border border-slate-300 text-white flex'>
                    <button className='w-[50px] h-[30px] mx-[5px] rounded-[3px] bg-blue-400' onClick={btReadClick}>Read</button>
                    <button className='w-[40px] h-[30px] mx-[5px] rounded-[3px] bg-blue-600' onClick={btEditClick}>Edit</button>
                    <button className='w-[60px] h-[30px] mx-[5px] rounded-[3px] bg-red-600' onClick={btDeleteClick} >Delete</button>
                </td>
            </tr>

    );
  }
  
  export default TableItem;