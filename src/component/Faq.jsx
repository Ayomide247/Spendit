import React from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Faq = ({ faq, id, handleFaqClick }) => {
    const { title, text, icon, isOpen } = faq
    return (
        <div className="my-5 text-slate-700 border-b py-6  w-[100%] relative md:mt-10"
        >
            <div className="flex justify-between gap-x-4 md:gap-x-8 "
            >
                <div onClick={() => handleFaqClick(id)} className="w-[75%] mr-auto text-start  cursor-pointer">
                    <h1 className="font-semibold text-md md:text-xl md:w-[70%] text-[#54BD95]">{title}</h1>

                    <p className={`mt-2.5 text-justify text-sm md:text-[1rem] md:leading-7 ${!isOpen ? 'hidden' : ''} transition-all duration-500 ease-in-out `}>
                        {text}
                    </p>
                </div>
            </div>
            <span onClick={() => handleFaqClick(id)} className="absolute right-0 top-6  text-[#8AF1BB] grid place-content-center cursor-pointer">
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
        </div>
    )
}

export default Faq