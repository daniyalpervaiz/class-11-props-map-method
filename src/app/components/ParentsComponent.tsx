import React from 'react'
import ChildComponent from './ChildComponent'
function ParentsComponent() {
    let carDetails = [
        { car_name: "Toyota", image_path: "/toyota.jpg", price: "PKR 59.7 - 75.5", rating: 8.5 },
        { car_name: "Alto", image_path: "/alto.png", price: "PKR 23 - 30", rating: 6.5 },
        { car_name: "Honda City", image_path: "/honda.jpg", price: "PKR 46.5 - 58.5", rating: 7.5 },
        { car_name: "Honda Civic", image_path: "/civic.jpg", price: "PKR PKR 86.6 - 99", rating: 9 }
    ]
    return (
        <div>
            <div className='lg:flex lg:justify-center lg:mt-56 lg:gap-4 '>
                {carDetails.map((elements,index) => {
                    return (
                        <div className='flex justify-center my-2'>

                            <div className='border-gray-400 border-2 lg:h-64 lg:w-5/6  rounded-2xl '>
                                <ChildComponent imagePath={elements.image_path} carName={elements.car_name} carPrice={elements.price} carRating={elements.rating} key={index}  />
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default ParentsComponent
