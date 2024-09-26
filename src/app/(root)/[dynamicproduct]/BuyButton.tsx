'use client'
import { useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Buy = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <>
            {!click ? (
                <button onClick={handleClick}>
                    <IoIosHeartEmpty size={26} />
                </button>
            ) : (
                <button onClick={handleClick}>
                    <FaHeart color="red" size={26} />
                </button>
            )}
        </>
    );
};

export default Buy;
