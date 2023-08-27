import React from 'react';


const HomeCards = ({ data }) => {
    const { name, occupation, image, comment } = data;

    return (
        <div className='min-w-[100%] lg:min-w-[30%] lg:max-w-[30%] border p-3 rounded-md '>
            <p className='text-start font-medium text-[16px] my-5'> <span className='font-bold text-[20px] text-[#3f8c64]  '>“</span>{comment}<span className='font-bold text-[20px] text-[#3f8c64]'>”</span></p>
            <div className='border-b border my-2'></div>

            <div className='flex gap-5'>
                <img src={image} alt="" className='w-[50px] h-[50px]' />
                <div className='text-start'>
                    <h2 className='font-bold'>{name}</h2>
                    <p>{occupation}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCards