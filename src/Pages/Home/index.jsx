import { useContext } from 'react'
import Chat from '../../Components/Chat'
import Head from '../../Components/Head'
import Msg from '../../Components/Msg'
import SideBar from '../../Components/SideBar'
import './index.scss'
import { UserContext } from '../../Context/USersContext'
const Home = () => {
  const {activeUser} = useContext(UserContext)
  return (
    <div className='home vh-100 pt-0 pt-md-4 pt-lg-5 pb-4 '>
      <div className="container d-flex flex-wrap bg-white rounded">
        <div className="col-12 col-md-4 col-lg-3 border-end mt-4">
          <SideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 d-flex flex-column">
          <div className="border-bottom">
            <Head />
          </div>
          <Chat />
          <Msg />
        </div>
      </div>
    </div>
  )
}

export default Home