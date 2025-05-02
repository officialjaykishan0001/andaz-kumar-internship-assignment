import { Button } from '@radix-ui/themes'
import React from 'react'

const DoctorDescriptionCard = () => {
    return (
        <div>
            <div className='border border-gray-300 rounded-md min-w-[700px] p-2 cursor-pointer m-3 shadow-md'>
                <div className='flex '>
                    <div><img src="https://images.apollo247.in/doctors/a3d6f89d-8212-4988-bea0-54bf9f6db960-1742362433743.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" width={70} alt="Dr. Shristi singh" /></div>
                    <div>
                        <div className=''>Dr. Shristi singh</div>
                        <div className='text-gray-500 text-[12px]'>General Physician</div>
                        <div className='text-purple-800 font-semibold text-sm'>10 Years, MBBS, MD (GENERAL MEDICINE)</div>
                    </div>
                </div>
                <div className='flex justify-between  '>
                    <span className='text-gray-500 text-sm'>Apollo 24/7 | virtual clinic | Andhra pradesh</span>
                    <Button variant="outline" className='cursor-pointer'>Consult Online</Button>
                </div>
            </div>
        </div>
    )
}

export default DoctorDescriptionCard