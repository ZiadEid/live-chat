import './index.scss'
const MyMsg = ({message}) => {
  return (
    <div className='my-msg d-flex align-items-center justify-content-start position-relative'>
      {message && <pre className='mb-0 p-2 rounded-end'>{message}</pre>}
    </div>
  )
}

export default MyMsg