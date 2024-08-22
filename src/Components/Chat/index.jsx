import MyMsg from '../MyMsg'
import OtherMsg from '../OtherMsg'
import './index.scss'

const Chat = () => {
  return (
    <div className='chat p-3 d-flex align-content-end gap-4 flex-column'>
      <div className="col-12 mt-auto">
        <MyMsg message='My Message' />
      </div>
      <div className="col-12">
        <MyMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
      <div className="col-12">
        <OtherMsg message='My Long Message' />
      </div>
    </div>
  )
}

export default Chat