import { YOUTUBE_LOGO } from '../constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { sideBarToggle } from '../store/userSlice'

const Header = () => {
  const [searchText, setSeacrchText] = useState('')
  const userDetails = useSelector((store) => store.userDetails)
  console.log('userDetails', userDetails)

  const dispatch = useDispatch()

  const showOrHideSideBar = () => {
    dispatch(sideBarToggle())
  }

  return (
    <>
      <div className="flex w-full items-center gap-4 px-4 py-3 shadow-md">
        <div className="flex flex-1 items-center gap-4">
          <button
            onClick={() => showOrHideSideBar()}
            className="cursor-pointer flex items-center justify-center rounded-full p-2"
          >
            <MenuIcon />
          </button>
          <img className="w-36" src={YOUTUBE_LOGO}></img>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-2xl items-center">
            <input
              className="w-full rounded-l-md border border-gray-400 px-3 py-2"
              placeholder="Start Searching...."
              type="text"
              value={searchText}
              onChange={() => {}}
            ></input>
            <button className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-400 bg-gray-100 px-4 py-2">
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="shrink-0">User Profile</div>
        </div>
      </div>
    </>
  )
}

export default Header
