import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import FilterChips from './FilterChips'
import { YOUTUBE_API_URL } from '../constants/contants'

const Maincontainer = () => {
  const sideBarIsOpen = useSelector((store) => store.userDetails.sideBarIsOpen)

  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    getVideoDetails()
  }, [])

  const getVideoDetails = async () => {
    console.log('YOUTUBE_API_URL::', YOUTUBE_API_URL)
    let data = await fetch(YOUTUBE_API_URL)
    let videos = await data.json()
    console.log(videos.items)
    setVideoData(videos.items)
  }

  return (
    videoData.length > 0 && (
      <div className="flex w-full">
        <div
          className={`overflow-hidden transition-all duration-300 ${sideBarIsOpen ? 'w-1/6' : 'w-0'}`}
        >
          <Sidebar></Sidebar>
        </div>
        <div className={`transition-all duration-300 ${sideBarIsOpen ? 'w-3/4' : 'w-full'}`}>
          <div className="px-6 pt-4">
            <FilterChips></FilterChips>
          </div>
          <div className="flex flex-wrap gap-6 px-6 pb-6">
            {videoData.map((item, index) => (
              <div
                key={`${item.id?.videoId || item.etag || 'video'}-${index}`}
                className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  className="h-52 w-full object-cover"
                  src={item.snippet?.thumbnails?.medium?.url}
                  alt={item.snippet?.title || 'Video thumbnail'}
                />
                <div className="p-3">
                  <p className="line-clamp-2 text-sm font-medium text-gray-900">
                    {item.snippet?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default Maincontainer
