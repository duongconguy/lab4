import React from 'react'

function Create(props) {
    const btCreateClick = ()=>{ props.OpenModal()}

    return (
      <div className="flex flex-col">
        <h1 className='text-[25px] font-[500] mb-[10px] text-left'>Read Products</h1>
        <hr />
        <button type='button' className='w-[15%] h-[30px] mt-[20px] bg-[#1a73e8] text-white rounded-[3px] text-[14px]' onClick={btCreateClick}>Create New Product</button>
      </div>
    );
  }
  
  export default Create;