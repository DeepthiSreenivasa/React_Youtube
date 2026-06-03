import { YOUTUBE_LOGO, YOUTUBE_SEARCH_API, YOUTUBE_API_KEY } from '../constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { sideBarToggle } from '../store/userSlice'

const Header = () => {
  const [searchText, setSeacrchText] = useState('')
  const userDetails = useSelector((store) => store.userDetails)

  const dispatch = useDispatch()

  const controller = new AbortController()

  useEffect(() => {
    let timer = setTimeout(() => {
      getSearchResults(controller)
    }, 2000)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [searchText])

  const searchVideoParams = new URLSearchParams({
    part: 'snippet',
    maxResults: 20,
    q: searchText,
    type: 'video',
    key: YOUTUBE_API_KEY,
  })

  const showOrHideSideBar = () => {
    dispatch(sideBarToggle())
  }

  const getSearchResults = (controller) => {
    fetch('https://dummyjson.com/products/search?q=' + searchText, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => console.log('SearchData::', data))
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
              onChange={(e) => {
                setSeacrchText(e.target.value)
              }}
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
