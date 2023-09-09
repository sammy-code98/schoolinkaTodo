import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { Header, DateSlider, TaskCard, AddTask } from "./components"
import { EditContent, EditTask } from "./components/EditTask";


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

  // initialise modalObj
  const modalObjInit = {
    addTask: false,
    editContnet: false,
    editTask: false
  }
  // modal state
  const [modal, setModal] = useState<{ addTask: boolean, editContnet: boolean, editTask: boolean }>(modalObjInit)

  // function to handle open modals
  const handleOpenModal = (type: "addTask" | "editContnet" | "editTask") => {
    const newModals = { ...modalObjInit, [type]: !modal[type] }
    console.log({ newModals })
    setModal((prev) => {
      return { ...prev, ...newModals }
    })
    console.log({ modal })

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
              onClick={() => handleOpenModal("addTask")}
              className="flex items-center gap-2 py-2 px-6 font-semibold text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-md">
              <MdAdd /> Create New Task
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 p-4 border-r-secondary_grey">
            <DateSlider />

            <div className="mt-4">
              <h5 className="text-primary_black text-lg font-semibold">My Tasks</h5>
              <TaskCard title={"Create Wireframe"} timestamp={"10:30 am - 11:30 am"} day={"Today"} editHandler={() => handleOpenModal("editContnet")} />
            </div>
          </div>
          <div className="hidden lg:block">
            {modal.addTask ? (
              <AddTask clickHandler={() => handleOpenModal("addTask")} />
            ) : null}

            <div> 
              {modal.editContnet ? (
                <EditContent closeEditContent={() => handleOpenModal("editContnet")} contentHandler={() => handleOpenModal("editTask")} />
              ) : null}
            </div>

            <div>
              {modal.editTask ? (
                <EditTask editHandler={() => handleOpenModal("editTask")} />
              ) : null}
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
