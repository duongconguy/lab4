import React from "react";

function DeleteModal(props) {

    const btCancelClick = ()=>{ props.CloseModal()}

    const btDeletelClick = ()=>{ 
        props.CloseModal();
        props.deleteItem();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div>
                        <p>Do you want Delete?</p>
                        <br/>
                        <hr className="mb-4" />
                        <div className="flex space-x-2 justify-between">
                            <button 
                                className="w-16 h-6 bg-red-500 rounded-md text-white text-sm"
                                onClick={btCancelClick}
                            > Cancel</button>
                            <button
                                className="w-16 h-6 bg-blue-500 rounded-md text-white text-sm"
                                onClick={btDeletelClick}
                            > Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;