import { Header, DateSlider, TaskCard } from "./components"
import { AddTask } from "./components/TaskModals";
import { MdAdd } from "react-icons/md";


function App() {
  let timeOfDay: string;
  const date: Date = new Date()
  const hours: number = date.getHours()
  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  return (
    <>
      <Header />
      <div className="relative mx-auto max-w-screen-xl mt-12">
        <div className="flex justify-between">
          <div className="px-4 lg:px-0">
            <h3 className="text-primary_black text-3xl font-semibold">Good {timeOfDay}!</h3>
            <p className="mt-2 text-grey">You got some task to do. </p>
          </div>
          <div className="hidden lg:block">
            <button type="button"
              className="flex items-center gap-2 py-2 px-6 text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-md">
              <MdAdd /> Create New Task
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 p-4 border-r-secondary_grey">
            <DateSlider />
            <div className="mt-4">
              <h5 className="text-primary_black text-lg font-semibold">My Tasks</h5>
              <TaskCard title={"Create Wireframe"} timestamp={"10:30 am - 11:30 am"} day={"Today"} />
              <TaskCard title={"Create Wireframe"} timestamp={"10:30 am - 11:30 am"} day={"Today"} />
              <TaskCard title={"Create Wireframe"} timestamp={"10:30 am - 11:30 am"} day={"Today"} />

            </div>
          </div>
          <div className="hidden lg:block">
            <AddTask />
          </div>
        </div>


      </div>
    </>
  )
}

export default App
