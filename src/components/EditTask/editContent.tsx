import { MdClear, MdAccessTime } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

interface EditProps {
    contentHandler: () => void,
    closeEditContent: () => void
}
export default function EditContent({ contentHandler, closeEditContent }: EditProps) {
    return (
        <div className='p-8 bg-base_white  rounded-lg border-task_border drop-shadow-xl mt-12'>
            <div className="flex justify-end" >
                <MdClear size='1.5rem' color="#344054" className="cursor-pointer" onClick={closeEditContent} />
            </div>
            <div className="mt-8">
                <h3 className='text-primary_black text-lg font-semibold'>Create Wireframe</h3>
            </div>
            <div className="py-4">
                <div className="flex items-center gap-2 mb-2">
                    <BsCalendar2Date size="1.5rem" color="#3F5BF6" />
                    <p className="text-primary_black text-md font-meduim">20th January, 2023</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdAccessTime size="1.5rem" color="#3F5BF6" />
                    <p className="text-primary_black text-md font-meduim">8:00 - 10:00 AM</p>

                </div>
            </div>


            <div className='mt-6 flex justify-between items-center'>

                <button type='button'
                    className='py-1.5 px-12  text-lg font-semibold text-primary_grey drop-shadow-sm bg-base_white rounded-lg border border-task_border hover:bg-primary_blue hover:text-base_white'>
                    Delete
                </button>

                <button type="submit"
                    onClick={contentHandler}
                    className="py-1.5 px-16 text-lg font-semibold text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-sm hover:opacity-100">
                    Edit
                </button>
            </div>
        </div>
    )
}
