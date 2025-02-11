import { BatteryEmpty, BatteryEmpty1, BatteryFull, Monitor, MonitorMobbile } from 'iconsax-react'
import React from 'react'

export const devices = [
    {
        name: "Xmo-23 PX",
        activeAds: 12,
        charge: 23
    },
    {
        name: "Regp-lg QT",
        activeAds: 7,
        charge: 51
    },
    {
        name: "KOO-12",
        activeAds: 5,
        charge: 98
    },
    {
        name: "Mini-xp, 12",
        activeAds: 5,
        charge: 98
    },
]
export default function CardOne() {
    return (
        <div className='md:w-80 w-full rounded-2xl border border-gray-600 bg-gray-400/20 backdrop-blur-lg p-5 shadow-lg'>
            <div className='flex pb-4 border-b border-gray-600 w-full justify-between items-center'>
                <div>
                    <h1 className='font-semibold text-xl'>8</h1>
                    <p className='text-sm'>devices</p>
                </div>
                <MonitorMobbile
                    size="32"
                    color="currentColor"
                    className='text-gray-400'
                />
            </div>
            <div className=''>
                {devices.map((device, idx) => (
                    <div key={idx}
                        className='flex mt-4 justify-between items-center'
                    >
                        <div className='flex gap-3 items-center'>
                            <div className='p-2 border border-lime-300 rounded-full bg-lime-500/5 backdrop-blur'>
                                <Monitor
                                    size="18"
                                    color="currentColor"
                                    className='text-lime-500'
                                />
                            </div>
                            <div>
                                <p className='text-xs font-light text-gray-400'>
                                    {device.name}
                                </p>
                                <p className=''>
                                    <span>{device.activeAds}</span>{" "}
                                    <span className='text-xs font-light text-gray-400'>active ads</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            {device.charge < 50 && (
                                <BatteryEmpty
                                    size="18"
                                    color="currentColor"
                                    className='text-lime-500'
                                />
                            )}
                            {device.charge > 50 && (
                                <>
                                    {device.charge > 90 ? (
                                        <BatteryFull
                                            size="18"
                                            color="currentColor"
                                            className='text-lime-500'
                                        />
                                    ) : (
                                        <BatteryEmpty1
                                            size="18"
                                            color="currentColor"
                                            className='text-lime-500'
                                        />

                                    )}
                                </>
                            )}

                            <p className='text-sm text-gray-400'>{device.charge} %</p>
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
