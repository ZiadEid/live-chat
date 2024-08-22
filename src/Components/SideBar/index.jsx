import userImg from './../../assets/user-img.webp'
import SideUser from '../SideUser'
import './index.scss'
import { useContext } from 'react'
import { UserContext } from '../../Context/USersContext'

function SideBar() {
  const { users, activeUser, setActiveUser } = useContext(UserContext);
  return (
    <div className='side-bar d-flex flex-column align-items-center'>
      <div className="search border d-flex align-items-center rounded gap-3">
        <label htmlFor="searchUsers w-100">
          <i className="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center px-3"></i>
        </label>
        <input
          id="searchUsers"
          className='border-0'
          type="search"
          name="searchUsers"
        />
      </div>
      {
        users.map(user => {
          return (
            <div key={user.userId} onClick={() => {
              setActiveUser(user.userId)
            }} >
              <SideUser
                isActive={activeUser == user.userId && true}
                userName={user.userName}
                userImg={userImg}
                userState={user.userState}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default SideBar