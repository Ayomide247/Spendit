import React from 'react';
import { GiSmartphone } from "react-icons/gi"


const NavButton = () => {
    return (
        <button className="flex border py-2 px-7 gap-3 rounded-full text-white bg-[#54BD95] hover:bg-white hover:text-[#54BD95] transition transform duration-500">

            <GiSmartphone className="m-auto font-semibold" />
            <p>Download</p>

        </button>
    )
}

export default NavButton