import React from 'react'
import {  Button, Popover } from '@radix-ui/themes'
import { LocationEdit, User } from 'lucide-react'
const Navbar = () => {
    return (
        <div>
            <div className="min-h-[20px] border-b border-gray-400 mx-auto shadow-sm" >
                <div className='flex justify-between  mx-2 py-1'>
                    <div className='flex gap-2 items-center'>
                        <div><img src="https://images.apollo247.in/images/icons/apollo247.svg" alt="logo" width={55} /></div>
                        <div className='flex items-center gap-1'>
                            <span className='text-[12px]'><LocationEdit size={15} /></span>
                            <span className='flex flex-col items-center gap'>
                                <div className='text-[12px] '> Select location</div>
                                <Popover.Root>
                                    <Popover.Trigger>
                                        <Button variant="soft" className='font-bold text-[12px]'>
                                            Select address
                                        </Button>
                                    </Popover.Trigger>
                                    <Popover.Content width="360px">
                                        <div className='absolute items-center left-[30vw] top-[10vh] shadow-lg border-black border rounded-md min-h-[250px] min-w-[250px]'>
                                            <div className='flex justify-center'>
                                                <span>Select Location</span>
                                            </div>
                                            <div className='flex justify-center px-1'>
                                                <input type="text" placeholder='search the location' className='px-1 rounded-md border-black border w-full' />
                                            </div>
                                        </div>
                                    </Popover.Content>
                                </Popover.Root>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center px-1'>
                            <input type="text" placeholder='search doctors, specialist, etc' className=' px-1 rounded-sm border-gray-600 border bg-gray-50 w-96 ' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='flex gap-1 text-[12px] border border-gray-600 p-2 rounded-md  '>
                            Login
                            <User size={15} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
