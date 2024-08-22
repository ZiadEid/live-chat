import './index.scss'
const SideUser = ({ userName, userState, userImg, isActive }) => {
  
  return (
    <div className='side-user my-1'>
      <div
        className={`${userState == 'online' && 'online'} ${isActive && 'user-clicked'} d-flex align-items-center rounded gap-3 p-2`}
      >
        <div className="col-3 mb-1">
          <img className='w-100 rounded-circle' src={userImg} alt="user image" />
        </div>
        <div className="col-9">
          <div className="content d-flex flex-column gap-1">
            <h4 className="user-name mb-0">{userName}</h4>
            <div className="d-flex align-items-center gap-2">
              <span className='rounded-circle mt-1'></span>
              <p className='mb-0'>{userState}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideUser