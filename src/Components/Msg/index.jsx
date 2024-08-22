import { useRef } from 'react'
import './index.scss'
const Msg = () => {
  const msgRef = useRef()
  // const sendMsg = (e) => {
  //   e.preventDefault()
  //   axios.post('', msgRef.current.value)
  // }
  return (
    <form
      // onClick={sendMsg}
      className='msg overflow-hidden border d-flex align-items-center rounded gap-3 w-75 mx-auto mt-2'
    >
      <i className="fa-solid fa-paper-plane d-flex align-items-center justify-content-center px-3"></i>
      <textarea ref={msgRef} className='border-0' placeholder='Enter your message'></textarea>
    </form>
  )
}

export default Msg