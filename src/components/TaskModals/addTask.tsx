import { MdClear, MdAccessTime, MdNotifications } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";



export default function AddTask() {
    return (
        <div className='p-8 bg-base_white  rounded-lg border-task_border drop-shadow-xl mt-12'>

            <div className='flex justify-between items-center'>
                <h3 className='text-primary_black text-lg font-semibold'>Add Task</h3>
                <MdClear size='1.5rem' color="#344054" className="cursor-pointer" />
            </div>

            <div className='mt-8'>
                <textarea rows={4} className='w-full p-2.5 text-primary_grey rounded-lg bg-base_white border border-task_border drop-shadow-sm focus:ring-task_border focus:border-task_border' placeholder='Enter your Task'></textarea>
            </div>

            <div className='mt-4 flex justify-between items-center'>

                <button type='button' className='flex items-center gap-2 py-2 px-6  text-sm font-normal text-primary_grey drop-shadow-sm bg-base_white rounded-lg border border-task_border hover:bg-primary_blue hover:text-base_white'>
                    <BsCalendar2Date size="1rem" />  Today
                </button>

                <button type='button' className='flex items-center gap-2 py-2 px-6  text-sm font-normal text-primary_grey drop-shadow-sm bg-base_white rounded-lg border border-task_border hover:bg-primary_blue hover:text-base_white'>
                    <MdAccessTime size="1rem" />  00:00
                </button>

                <button type='button' className='flex items-center gap-2 py-2 px-6  text-sm font-normal text-primary_grey drop-shadow-sm bg-base_white rounded-lg border border-task_border hover:bg-primary_blue hover:text-base_white'>
                    <MdAccessTime size="1rem" />  00:00
                </button>

            </div>

            <div className='mt-4 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <MdNotifications size="1rem" color="#667085" />
                    <h3 className='text-grey font-normal text-base'> 10 Minute before</h3>
                </div>
                <MdClear size='1rem' color="#344054" className="cursor-pointer" />
            </div>


            <div className='mt-6 flex justify-between items-center'>

                <button type='button' className='py-1.5 px-12  text-lg font-meduim text-primary_grey drop-shadow-sm bg-base_white rounded-lg border border-task_border hover:bg-primary_blue hover:text-base_white'>
                    Cancel
                </button>

                <button type="button"
                    className="py-1.5 px-16 text-lg font-meduim text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-sm hover:opacity-100">
                    Add
                </button>
            </div>

        </div>
    )
}
