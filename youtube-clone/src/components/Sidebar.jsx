import { useSelector } from 'react-redux'

const Sidebar = () => {
  const userDetails = useSelector((store) => store.userDetails)

  console.log('userDetails from SideBar::', userDetails)

  const sideMenuList = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Shorts' },
    { id: 3, label: 'Subscription' },
  ]

  return (
    <>
      {userDetails.sideBarIsOpen && (
        <ul>
          {sideMenuList.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Sidebar
