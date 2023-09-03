

type TaskCardProps = {
    title: string,
    timestamp: string,
    day: string
}

export default function Index({ title, timestamp, day }: TaskCardProps) {
    return (
        <div className="mt-8 w-full">
            <div className="flex justify-between items-center bg-card_white py-6 px-8 border-b-secondary_grey shadow-sm">
                <div className="flex gap-2 items-center">
                    <input type="checkbox" className="w-5 h-5 bg-base_white border-secondary_grey rounded focus:ring-primary_blue" />
                    <div className="ml-3">
                        <h3 className="text-primary_black font-semibold">{title}</h3>
                        <p className="text-grey font-normal">{timestamp}</p>
                    </div>
                </div>
                <div>
                    <p className="text-grey font-normal">{day}</p>
                </div>
            </div>
        </div>
    )
}

