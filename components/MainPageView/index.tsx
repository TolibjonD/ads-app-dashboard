"use client"
import { devices } from '@/components/Card'
import { adsList } from '@/components/Card/CardTwo'
import { BatteryEmpty, BatteryEmpty1, BatteryFull, LampCharge, Video } from 'iconsax-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';


const adsLiveList = [
    {
        name: "Regp-lg QT",
        video: "/video/video1.mp4",
        title: "Ads title 1",
        charge: 12
    },
    {
        name: "Regp-lg QT",
        video: "/video/video-2.mp4",
        title: "Ads title 1",
        charge: 56
    },
    {
        name: "KOO-12",
        video: "/video/video-3.mp4",
        title: "Ads title 2",
        charge: 98
    },
    {
        name: "Mini-xp, 12",
        video: "/video/video-4.mp4",
        title: "Ads title 3",
        charge: 63
    },
]
export default function HomeView() {
    const [currentVideo, setcurrentVideo] = useState(adsLiveList[0]);
    const [currentTab, setcurrentTab] = useState(0);

    const handleClickDeviceButton = (idx: number) => {
        setcurrentVideo(adsLiveList[idx])
        setcurrentTab(idx)
    }
    return (
        <div className='flex flex-col gap-4 w-full md:h-full h-auto rounded-2xl bg-gray-300 p-4 relative'>
            <div className='flex justify-between md:items-center flex-col md:flex-row'>
                <h1 className='md:text-3xl font-semibold text-black'>Hi Saidkodirov!</h1>
                <div className='flex md:gap-2 md:w-auto w-full gap-1 rounded-full bg-black/80 p-2'>
                    {devices.map((device, idx) => (
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className={`${idx === currentTab ? 'bg-white rounded-full' : 'bg-transparent'} md:px-5 md:py-2 py-1 px-2 cursor-pointer`}
                            key={idx}
                            onClick={() => handleClickDeviceButton(idx)}
                        >
                            <p className={`${idx === currentTab ? 'text-black' : 'text-white'} text-center md:text-sm text-[10px] font-light`}>{device.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Background Section */}
            <div id='video-div' className='relative w-full md:h-[800px] h-[320px] overflow-hidden rounded-3xl'>
                <AnimatePresence mode='wait'>
                    <motion.video
                        key={currentVideo.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <source src={currentVideo.video} type='video/mp4' />
                    </motion.video>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 z-10 border-gray-400 border text-white bg-white/20 backdrop-blur flex px-3 py-[6px] rounded-full items-center gap-2">
                    <div className='w-2 h-2 rounded-full block bg-pink-400'></div>
                    <h2 className="text-sm">LIVE</h2>
                </div>
                <div className="absolute top-4 right-4 z-10 flex gap-1 flex-row-reverse">
                    <div className='border-gray-400 border text-white bg-white/20 backdrop-blur flex px-3 py-[6px] rounded-full items-center gap-2'>
                        {currentVideo.charge < 50 && (
                            <BatteryEmpty
                                size="18"
                                color="currentColor"
                                className='text-white'
                            />
                        )}
                        {currentVideo.charge > 50 && (
                            <>
                                {currentVideo.charge > 90 ? (
                                    <BatteryFull
                                        size="18"
                                        color="currentColor"
                                        className='text-white'
                                    />
                                ) : (
                                    <BatteryEmpty1
                                        size="18"
                                        color="currentColor"
                                        className='text-white'
                                    />

                                )}
                            </>
                        )}
                        <p className='text-sm text-white'>{currentVideo.charge}%</p>
                    </div>
                    <div className='border-gray-400 border text-white bg-white/20 backdrop-blur flex px-3 py-[6px] rounded-full items-center gap-2'>
                        <Video
                            size="18"
                            color="currentColor"
                            className='text-white'
                        />
                        <p className='text-sm text-white'>{devices[currentTab].activeAds}</p>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 z-10 border-gray-400 border text-white bg-white/20 backdrop-blur flex p-2 rounded-lg gap-2">
                    <div className='relative overflow-hidden rounded-lg w-16 h-16'>
                        <Image
                            src={"/images/user-2.jpg"}
                            alt={''}
                            fill
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h1 className='text-white'>{devices[currentTab].name}</h1>
                            <h1 className='text-white text-xs'>{adsList[currentTab].name}</h1>
                            <h1 className='text-white text-xs mt-1
                            '>
                                <span className='font-semibold'>Driver: </span>Saidkodirov Tolibjon
                            </h1>
                        </div>
                        <div className='relative overflow-hidden md:ml-24 rounded w-7 h-7'>
                            <Image
                                src={adsList[currentTab].logo}
                                alt={adsList[currentTab].name}
                                fill
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full flex gap-4 flex-col md:flex-row'>
                {adsLiveList.map((video, idx) => idx !== currentTab && (
                    <div
                        key={idx}
                        className='md:h-full h-[320px] w-full relative overflow-hidden rounded-xl'>
                        <motion.div
                            key={idx}
                            className='h-full w-full relative overflow-hidden rounded-xl'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleClickDeviceButton(idx)}
                        >
                            <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover'>
                                <source src={video.video} type='video/mp4' />
                            </video>
                            <div className='absolute inset-0 bg-black/30'></div>
                        </motion.div>
                        <div className="absolute bottom-4 left-4 right-4 z-10 border-gray-400 border text-white bg-white/20 backdrop-blur flex p-2 rounded-xl justify-between items-center">
                            <div className='flex items-center gap-2'>
                                <div className='relative overflow-hidden rounded-full bg-black flex items-center justify-center h-10 w-10'>
                                    <LampCharge
                                        size="18"
                                        color="currentColor"
                                        className='text-white'
                                    />
                                </div>
                                <div className=''>
                                    <h1 className='text-white'>{video.name}</h1>
                                    <h1 className='text-white text-xs'>{video.title}</h1>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                </svg>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
