import './index.scss'
const OtherMsg = ({message}) => {
  return (
    <div className='other-msg d-flex align-items-center justify-content-end position-relative'>
      {message && <pre className='mb-0 p-2 rounded-start'>{message}</pre>}
    </div>
  )
}

export default OtherMsg