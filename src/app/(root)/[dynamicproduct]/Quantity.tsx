'use client'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Quantity = ()=> {
    return (
        
        <div className='flex flex-row gap-2.5 items-center mt-2'>
           <div className=' rounded-full flex justify-center items-center bg-gray-100'><button ><CiCircleMinus size={27}/></button></div>
           <p className='text-xl font-semibold'>1</p>
           <div className='rounded-full flex justify-center items-center bg-gray-100'><button ><CiCirclePlus size={27}/></button></div>
        </div>
        
    )
}

export default Quantity;