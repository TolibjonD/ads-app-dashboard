import Image from 'next/image'
import React from 'react'

export const adsList = [
    {
        name: "Uzum",
        activeAds: 12,
        allAds: 23,
        logo: "/images/uzum.jpg"
    },
    {
        name: "Uztelecom",
        activeAds: 9,
        allAds: 51,
        logo: "/images/uztelecom.png"
    },
    {
        name: "NBU",
        activeAds: 15,
        allAds: 67,
        logo: "/images/nbu.png"
    },
    {
        name: "SQB",
        activeAds: 7,
        allAds: 18,
        logo: "/images/sqb.jpg"
    },
]
export default function CardTwo() {
    return (
        <div className='md:w-80 w-full rounded-2xl border border-gray-600 bg-gray-400/20 backdrop-blur-lg p-5 shadow-lg'>
            <div className=''>
                <div>
                    <h1 className='font-normal text-xl'>Ads partners</h1>
                    <p className='text-sm font-extralight text-white'>Ads contracted companies</p>
                </div>
                <div className='flex gap-4 w-full mt-5'>
                    <div className='bg-pink-300 p-3 w-full rounded-xl'>
                        <div className='h-10 w-10 flex items-center justify-center border border-white rounded-full bg-white/10 backdrop-blur'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                        <h1 className='text-black text-xl mt-3'>17</h1>
                        <p className='text-black text-xs'>TODAY</p>
                    </div>
                    <div className='bg-slate-400 p-3 w-full rounded-xl'>
                        <div className='h-10 w-10 flex items-center justify-center border border-white rounded-full bg-white/10 backdrop-blur'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                        <h1 className='text-black text-xl mt-3'>213</h1>
                        <p className='text-black text-xs'>THIS MONTH</p>
                    </div>
                </div>
            </div>
            <div className=''>
                {adsList.map((ads, idx) => (
                    <div key={idx}
                        className='flex mt-5 justify-between items-center'
                    >
                        <div className='flex gap-3 items-center'>
                            <div className='relative overflow-hidden rounded w-10 h-10'>
                                <Image
                                    src={ads.logo}
                                    alt={ads.name}
                                    fill
                                />
                            </div>
                            <div>
                                <p className='text-sm text-white'>
                                    {ads.name}
                                </p>
                                <p className='text-xs font-light text-gray-400'>
                                    <span>{ads.activeAds}</span>{" "}
                                    <span className='text-[10px] font-light text-gray-400'>active ads</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-white text-sm'>
                                {ads.allAds}
                            </p>
                            <span className='text-[10px] text-gray-400'>contracts closed</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-6'>
                <h1 className='text-center  text-sm font-light cursor-pointer'>See all</h1>
            </div>
        </div>
    )
}
