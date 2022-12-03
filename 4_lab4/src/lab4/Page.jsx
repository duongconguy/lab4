import React from "react";
import { useState } from 'react';

function Page(props) {

    const bt1Click = () => { 
        props.page1() 
        setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400 bg-red-400");
        setBg_bt2("w-6 h-6 text-sm border border-gray-400");}

    const bt2Click = () => { 
        setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
        setBg_bt2("w-6 h-6 text-sm border border-gray-400 bg-red-400")}

    const btIncreaseClick = () => { 
        if((props.page+1) === 2 ) {
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 bg-red-400")
        }
        if((props.page+1) === 1 ) {
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400 bg-red-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 ")
        }
        if(((props.page+1) !== 1) && ((props.page+1) !== 2) ){
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 ")
        }
        props.Increase()}

    const btDecreaseClick = () => { 
        if((props.page-1) === 2 ) {
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 bg-red-400")
        }
        if((props.page-1) === 1 ) {
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400 bg-red-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 ")
        }
        if(((props.page-1) !== 1) && ((props.page-1) !== 2) ){
            setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
            setBg_bt2("w-6 h-6 text-sm border border-gray-400 ")
        }
        props.Decrease()}

       let Bg_button1 = "w-6 h-6 text-sm border-y-[1px] border-gray-400 bg-red-400"
       let Bg_button2 = "w-6 h-6 text-sm border border-gray-400"

    // đổi màu nền nút nhấn chuyển trang
    const [Bg_bt1,setBg_bt1] = useState(Bg_button1)
    const [Bg_bt2,setBg_bt2] = useState(Bg_button2)

    return (
        <div className="flex items-start mt-[20px]">
            <button
                className="w-6 h-6 text-sm border border-gray-400"
                onClick={btDecreaseClick}
            > &lt; </button>
            <button
                className={Bg_bt1}
                onClick={bt1Click}
            > 1 </button>
            <button
                className={Bg_bt2}
                onClick={bt2Click}
            > 2 </button>
            <button className="w-6 h-6 text-sm  border-y-[1px] border-gray-400"> ... </button>
            <button
                className="w-6 h-6 text-sm border border-gray-400"
                onClick={btIncreaseClick}
            > &gt; </button>
        </div>
    );
}

export default Page;