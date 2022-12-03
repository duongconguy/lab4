import React from "react";
import { useRef } from "react";

function EditModal(props) {
    const id = useRef();
    const name = useRef();
    const description = useRef();
    const price = useRef();

    const btCancelClick = ()=>{ props.CloseModal()}

    const btEditClick = ()=>{ 
        props.editItem({
            id: id.current.value,
            name: name.current.value,
            description: description.current.value,
            price: price.current.value
        })
        props.CloseModal();
    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div>
                        <p>Edit Item</p>
                        <hr className="mb-4" />
                        <div className="flex space-x-2 text-center justify-between items-center">
                            <div className="w-[30%] flex flex-col space-y-4 justify-center items-start">
                                <p>ID :</p>
                                <p>Name :</p>
                                <p>Descripstion :</p>
                                <p>Price :</p>
                            </div>
                            <div className="w-[70%] flex flex-col space-y-4 justify-center items-center">
                                <input className="w-full border rounded-sm" ref={id} placeholder={props.item.id} />
                                <input className="w-full border rounded-sm" ref={name} placeholder={props.item.name} />
                                <input className="w-full border rounded-sm" ref={description} placeholder={props.item.description} />
                                <input className="w-full border rounded-sm" ref={price} placeholder={props.item.price} />
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

export default EditModal;