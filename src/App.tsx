import { Header, DateSlider } from "./components"
import { MdAdd } from "react-icons/md";


function App() {

  return (
    <>
      <Header />
      <div className="relative mx-auto max-w-screen-xl mt-12">
        <div className="flex justify-between">
          <div className="px-4 lg:px-0">
            <h3 className="text-primary_black text-3xl font-normal">Good morning!</h3>
            <p className="mt-2 text-grey">You got some task to do. </p>
          </div>
          <div className="hidden lg:block">
            <button type="button"
              className="flex items-center gap-2 py-2 px-6 text-base_white bg-primary_blue rounded-lg border border-primary_blue drop-shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)]">
              <MdAdd /> Create New Task
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">

          <div className="col-span-2 p-4 border-r-secondary_grey">
            <DateSlider />
          </div>
          <div>lee</div>
        </div>

      </div>
    </>
  )
}

export default App
