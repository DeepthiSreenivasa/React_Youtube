import Sidebar from './Sidebar'

const Maincontainer = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <Sidebar></Sidebar>
      </div>
      <div className="w-3/4">This is MainContianer</div>
    </div>
  )
}

export default Maincontainer
