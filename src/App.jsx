
import './App.css'
import data from'./message.json';

function App() {
  return (
    <>
     <h1 className="heading">List of messages</h1>
      <div className='body-container'>    
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
