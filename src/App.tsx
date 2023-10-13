import { useState } from "react";
import { MdAdd, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Header, DateSlider, TaskCard, AddTask } from "./components"
import { EditContent, EditTask } from "./components/EditTask";
import { useQuery } from "react-query";
import { getTodos } from "./api/todos";
import { Toaster } from 'react-hot-toast';

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
  // pagination state
  const [pageNumber, setPageNumber] = useState<number>(1)
  // modal state
  const [modal, setModal] = useState<{ addTask: boolean, editContnet: boolean, editTask: boolean }>(modalObjInit)

  // function to handle open modals
  const handleOpenModal = (type: "addTask" | "editContnet" | "editTask") => {
    const newModals = { ...modalObjInit, [type]: !modal[type] }
    console.log({ newModals })
    setModal((prev) => {
      return { ...prev, ...newModals }
    })

  }

  const { isLoading, isError, error, data } = useQuery(['todo', pageNumber], () => getTodos(pageNumber), { keepPreviousData: true })


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
              <div >
                {isLoading ? (<div>Loading...</div>) : isError ? (<div className="flex items-center">Error:{error.message}</div>) : (<div>
                  {data && data.length > 0 && data.map((todo: { title: string; }) => {
                    return <TaskCard
                      key={todo.title} title={todo.title}
                      timestamp={"10:30 am - 11:30 am"} day={"Today"} editHandler={() => handleOpenModal("editContnet")} />

              })}
                  <div className="mt-8 flex items-center gap-8 float-right">
                    <button type="button"
                      onClick={() => setPageNumber(pageNumber => pageNumber - 1)}
                      disabled={pageNumber === 1}
                      className="flex items-center gap-2 py-2 px-6 font-semibold text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-md">
                      <MdArrowBackIosNew />Prev</button>

                    <p className="text-primary_black text-lg font-semibold">{pageNumber}</p>
                    <button type="button"
                      onClick={() => setPageNumber(pageNumber => pageNumber + 1)}
                      // disabled={pageNumber}
                      className="flex items-center gap-2 py-2 px-6 font-semibold text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-md">
                      Next<MdArrowForwardIos /></button>
                  </div>
                </div>)}
              </div>
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
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
