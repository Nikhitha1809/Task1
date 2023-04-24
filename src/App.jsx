
import './App.css'
import data from'./message.json';

function App() {
  return (
    <>
      <div className='body-container'>
        <h1>List of messages</h1>
        {data.map(msg=>
        <ul className='list-container'>
          <li><strong>ID: </strong> {msg.id}</li>
          <li><strong>Message: </strong> {msg.message}</li>
        </ul>)}
      </div>
    </>
  )
}

export default App
