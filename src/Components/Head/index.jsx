import { useContext } from 'react'
import HeadUser from '../HeadUser'
import userImg from './../../assets/user-img.webp'
import './index.scss'
import { UserContext } from '../../Context/USersContext'
const Head = () => {
  const {user} = useContext(UserContext);
  return (
    <div className='head d-flex flex-wrap align-items-center justify-content-between ps-4 pt-4'>
      <div className="col-12 col-md-4 col-lg-3">
        <HeadUser userName={user.userName} userImg={userImg} actionState={user.actionState} />
      </div>
      <div className="col-12 col-md-4 col-lg-3 d-none d-md-block">
        <div className="featuers d-flex align-items-center gap-2">
          <i className="fa-solid fa-camera text-secondary border border-secondary px-2 py-2"></i>
          <i className="fa-solid fa-image border text-primary border-primary px-2 py-2"></i>
          <i className="fa-solid fa-gears border text-primary border-primary px-2 py-2"></i>
          <i className="fa-solid fa-question text-warning border border-warning px-2 py-2"></i>
        </div>
      </div>
    </div>
  )
}

export default Head