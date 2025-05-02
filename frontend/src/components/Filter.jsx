import { Checkbox, CheckboxGroup, Flex } from '@radix-ui/themes'
import { RadioGroup } from "radix-ui";
import React from 'react'

const Filter = () => {
    return (
        <div>
            <div className='max-w-[240px] border border-black px-1'>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>Filters</h1>
                    <span>clear all</span>
                </div>
                <div>
                    <h1 className='font-bold'>Mode of Consult</h1>
                    <Flex gap="2" className='items-center'>
                        <Checkbox defaultChecked />
                        Hospital Visit
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        Online Consult
                    </Flex>
                </div>
                <div>
                    <h1 className='font-bold'>Experience (In Years)</h1>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        0-5
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        6-10
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        11-16
                    </Flex>
                </div>
                <div>
                    <h1 className='font-bold'>Fees (In Rupees)</h1>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        100-500
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        500-1000
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        1000+
                    </Flex>
                </div>
                <div>
                    <h1 className='font-bold'>Language</h1>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        English
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        Hindi
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        Telugu
                    </Flex>
                </div>
                
                <div>
                    <h1 className='font-bold'>Facility</h1>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        Apollo Hospital
                    </Flex>
                    <Flex gap="2" className='items-center'>
                        <Checkbox  />
                        Other Clinics
                    </Flex>
                </div>


            </div>
        </div>
    )
}

export default Filter