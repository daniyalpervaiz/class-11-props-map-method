import React from 'react'
import Image from 'next/image'

function ChildComponent(props: any) {
    return (
        <div className='w-[100%] '>
            <div className='flex flex-col justify-center items-center text-center py-2' >
                <Image src={props.imagePath} alt="car-pic" width={230} height={100} />
                <h3 className='text-blue-900 font-bold'>{props.carName}</h3>
                <p className='text-green-500'>{props.carPrice} Lacs</p>
                <p className='text-gray-600'>{props.carRating} Reviews</p>
            </div>
        </div>
    )
}
export default ChildComponent
