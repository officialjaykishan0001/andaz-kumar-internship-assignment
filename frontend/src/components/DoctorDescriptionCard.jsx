import { Button } from '@radix-ui/themes'
import React from 'react'

const DoctorDescriptionCard = ({data}) => {
    return (
        <div>
            {data.map((doctor) => (
                <div key={doctor._id} className='border border-gray-300 rounded-md min-w-[700px] p-2 cursor-pointer m-3 shadow-md'>
                    <div className='flex '>
                        <div><img src={doctor.profilePic} width={70} alt={doctor.name} /></div>
                        <div>
                            <div className=''>{doctor.name}</div>
                            <div className='text-gray-500 text-[12px]'>{doctor.specialization}</div>
                            <div className='text-purple-800 font-semibold text-sm'>{doctor.experience} Years, {doctor.qualification}</div>
                        </div>
                    </div>
                    <div className='flex justify-between  '>
                        <span className='text-gray-500 text-sm'>{doctor.facility} | {doctor.modeOfConsult} | {doctor.location}</span>
                        <Button variant="outline" className='cursor-pointer'>Consult Online</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DoctorDescriptionCard