import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
     padding:10px  20px;
     width: 280px;
`


const Footer = () => {
    return (
        <div className='flex mt-12 bg-red-300 h-1/3 w-full flex-row flex-wrap justify-between gap-10 px-48 pt-20 pb-12 '>
            <div className='w-64 mr-24'>
                <h3 className='mb-8 text-4xl'>CLASSIC<span style={{ color: '#ec3b3b' }}>.</span></h3>
                <p className='text-xl font-medium'>Collaboration platform for modern items</p>
                <p className='mt-44 font-light text-sm' >© Copyright Classic 2022 Inc. </p>
            </div>
            <div className='w-44'>
                <div className='flex flex-col h-56 justify-between'>
                    <h3 className='font-normal text-xl'>COMPANY</h3>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">About us</a>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">Contact Us</a>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">Careers</a>
                </div>
            </div>
            <div className='w-56'>
                <div className='flex flex-col h-56 justify-between'>
                    <h3 className='font-medium mb-5 text-xl'>FEATURES</h3>
                    <a className='cursor-pointer  text-sm font-medium  text-black opacity-60' href="s">Screen sharing</a>
                    <a className='cursor-pointer  text-sm font-medium  text-black opacity-60' href="s">IOS & Android</a>
                    <a className='cursor-pointer  text-sm font-medium  text-black opacity-60' href="s">File Sharing</a>
                    <a className='cursor-pointer  text-sm font-medium  text-black opacity-60' href="s">User Management</a>
                </div>
            </div>
            <div className='w-60'>
                <div className='flex flex-col h-56 justify-between'>
                    <h3 className='font-normal text-xl' >CONTACT US</h3>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">shahilkv@gmail.com</a>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">+91 9846786928</a>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">Arakkinar Balan Road</a>
                </div >
            </div >
            <div className='w-80'>
                <div className='flex flex-col h-56 justify-between'>
                    <h3 className='font-normal text-xl' >STAY UP TO DATE</h3>
                    <a className='cursor-pointer  text-sm font-medium text-black opacity-60' href="s">Subscribe to our news Letter</a>
                    <Input placeholder='Email'></Input>
                </div>
            </div >

        </div >
    )
}

export default Footer