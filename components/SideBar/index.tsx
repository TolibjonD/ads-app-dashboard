"use client"

import { Coffee, Command, LampCharge, Music, Notification, Security, Setting2, Sun1 } from 'iconsax-react';
import { Lobster } from 'next/font/google'
import Image from 'next/image';
import React from 'react'
const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})
export default function SideBar() {
    return (
        <div className="fixed md:top-0 md:bottom-0 md:left-0 md:w-36 md:right-auto right-2 z-20 left-2 bottom-2 md:border-none border border-black/75 flex md:flex-col flex-row bg-black/70 rounded-lg md:bg-transparent md:backdrop-blur-none backdrop-blur md:justify-between md:pb-5 md:p-0 p-2 shadow-md md:shadow-none">
            <div className='w-full flex md:flex-col items-center'>
                <div className="h-32 w-full md:flex hidden items-center justify-center">
                    <h1 className={`font-medium text-2xl ${lobster.className}`}>Drizo-Ads
                    </h1>
                </div>
                <div className='flex md:w-auto w-full justify-between md:justify-normal md:flex-col md:gap-5 md:px-0 px-3'>
                    <div className='flex justify-center items-center'>
                        <button className='bg-pink-300 p-2 rounded-lg'>
                            <Command
                                size={18}
                                color='currentColor'
                                className='text-black'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='p-1 rounded-lg'>
                            <LampCharge
                                size={19}
                                color='currentColor'
                                className='text-white'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='p-1 rounded-lg'>
                            <Music
                                size={19}
                                color='currentColor'
                                className='text-white'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='p-1 rounded-lg'>
                            <Coffee
                                size={19}
                                color='currentColor'
                                className='text-white'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='p-1 rounded-lg'>
                            <Sun1
                                size={19}
                                color='currentColor'
                                className='text-white'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='p-1 rounded-lg'>
                            <Security
                                size={19}
                                color='currentColor'
                                className='text-white'
                            />
                        </button>
                    </div>
                </div>

            </div>
            <div className='md:flex hidden md:flex-col md:gap-5 gap-2'>
                <div className='flex justify-center items-center'>
                    <button className='p-1 rounded-lg'>
                        <Notification
                            size={19}
                            color='currentColor'
                            className='text-white'
                        />
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='p-1 rounded-lg'>
                        <Setting2
                            size={19}
                            color='currentColor'
                            className='text-white'
                        />
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex relative w-8 h-8 rounded-full cursor-pointer justify-center items-center overflow-hidden'>
                        <Image
                            src={"/images/user.jpeg"}
                            alt='user'
                            fill
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
