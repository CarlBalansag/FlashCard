'use client';
import React from 'react'

function BurgerMenu() {
    console.log("Burger Clicked")
    return null
}

const Card = () => {
    return (
        <div className="flex mt-10">
        <div className="flex-none w-14 h-14 ">
        </div>
        <div className="grow h-14 text-black outline outline-2 outline-offset-2 rounded-lg">
        <div className="grid grid-cols-10 ">
            <div className="col-span-9  ml-2 mt-4">Title</div>
            <div className="sm:ml-5 md:ml-10 lg:ml-12 xl:ml-14 2xl:ml-24"><img src='burger.svg' onClick={BurgerMenu}className='w-8 mt-3 cursor-pointer'/></div>
        </div>
        </div>
        <div className="flex-none w-14 h-14">
        </div>
        </div>
    )
}

export default Card