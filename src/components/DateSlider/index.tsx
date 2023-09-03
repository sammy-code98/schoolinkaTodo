import { useState } from "react"

export default function Index() {
    const [isActive, setIsActive] = useState<number>(0)

    return (
        <div>
            <h5 className="text-primary_black font-normal text-lg">January 2023</h5>

            <div className="py-6 flex w-full justify-center items-center">
                <div className="w-full flex justify-between items-start mb-8 space-x-4 overflow-x-scroll horizontal-bar">
                    {CalenderData.map((calDay, index) => (
                        <div className="flex flex-none flex-col items-center space-y-1" key={calDay.num}>
                            <div
                                onClick={() => setIsActive(index)}
                                className={index === isActive ? 'bg-primary_blue rounded-lg  px-6 py-3 cursor-pointer' : "rounded-lg border px-6 py-3 cursor-pointer border-date_grey bg-base_white drop-shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)]"}>
                                <h5 className={index === isActive ? 'text-base_white' : "text-center text-primary_black"}>{calDay.day}</h5>
                                <h5 className={index === isActive ? 'text-base_white text-center' : "text-center text-primary_black"}>{calDay.num}</h5>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
        </div>
    )
}


const CalenderData = [
    { day: 'Mon', num: '1' },
    { day: 'Mon', num: '2' },
    { day: 'Mon', num: '3' },
    { day: 'Mon', num: '4' },
    { day: 'Mon', num: '5' },
    { day: 'Mon', num: '6' },
    { day: 'Mon', num: '7' },
    { day: 'Mon', num: '8' },
    { day: 'Mon', num: '9' },
    { day: 'Mon', num: '10' },
    { day: 'Mon', num: '11' },
    { day: 'Mon', num: '12' },
    { day: 'Mon', num: '13' },
    { day: 'Mon', num: '14' },
    { day: 'Mon', num: '15' },
    { day: 'Mon', num: '16' },
    { day: 'Mon', num: '17' },

]