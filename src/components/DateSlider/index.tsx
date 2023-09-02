
export default function Index() {
    return (
        <div>
            <h5 className="text-primary_black font-normal text-lg">January 2023</h5>

            <div className="py-6 flex w-full justify-center items-center    ">
                {/* flex overflow-x-auto space-x-8 w-1/2  */}
                <div className="w-full flex justify-between items-start mb-8 space-x-4 overflow-x-scroll horizontal-bar">
                    {CalenderData.map((calDay) => (
                        <div className="flex flex-none flex-col items-center space-y-1">

                            <div className="rounded-lg border px-6 py-3 border-date_grey bg-base_white drop-shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)]">
                                <h5 className="text-center text-primary_black">{calDay.day}</h5>
                                <h5 className="text-center text-primary_black mt-2">{calDay.num}</h5>
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