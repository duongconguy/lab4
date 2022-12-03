import React from "react";

function ReadModal(props) {

    const btCancelClick = ()=>{ props.CloseModal()}

    const btEditClick = ()=>{
        props.CloseModal(); 
        props.OpenEditModal();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div>
                        <p>Read Item</p>
                        <hr className="mb-4" />
                        <div className="flex space-x-2 text-center justify-between items-center">
                            <div className="flex w-full flex-col space-y-4">
                                <div className="flex flex-row justify-between items-center">
                                    <p className="w-[30%] text-left" >ID :</p>
                                    <p className="w-[70%] border rounded-sm">{props.item.id}</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="w-[30%] text-left" >Name :</p>
                                    <p className="w-[70%] border rounded-sm">{props.item.name}</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="w-[30%] text-left" >Description :</p>
                                    <p className="w-[70%] border rounded-sm">{props.item.description}</p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="w-[30%] text-left" >Price :</p>
                                    <p className="w-[70%] border rounded-sm">{props.item.price}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-4 mb-1" />
                        <div className="flex space-x-2 items-end justify-end">
                            <button 
                                className="w-16 h-6 bg-red-500 rounded-md text-white text-sm"
                                onClick={btCancelClick}
                            > Cancel</button>
                            <button
                                className="w-16 h-6 bg-blue-500 rounded-md text-white text-sm"
                                onClick={btEditClick}
                            > Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadModal;