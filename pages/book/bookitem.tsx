import React, {useState} from "react"
import {FaTrash} from "react-icons/fa"
import {HiPencilSquare, HiShoppingCart} from "react-icons/hi2"
import Image from "next/image"

export default function ItemBook() {
    const handleDelete = () => {
    }

    const handleUpdate = () => {
    }
    
    return (
        <div>
            <span>
                <div className="flex">
                <Image src="https://m.media-amazon.com/images/I/41zCr6fFnpL._SX331_BO1,204,203,200_.jpg" width={94} height={64} alt="noPict"/>
                <span className="grid grid-col-4 gap-5">
                <button className="text-2xl bg-sky-600 rounded-xl p-3" onClick={handleDelete}><FaTrash /></button>
                <button className="text-2xl bg-sky-600 rounded-xl p-3" onClick={handleUpdate}><HiPencilSquare /></button>
                <button className="text-2xl bg-sky-600 rounded-xl p-3" ><HiShoppingCart /></button>
                </span>
                </div>
            </span>
        </div>
    )
}