import { Link, NavLink } from "react-router-dom"
function App() {

  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <p className='nav-item nav-heading'><Link className="nav-link" to={"#"}>Post List</Link></p>

          <ul className='flex item-center'>

            <li className='nav-item'><Link  className="nav-link" to={"#"}>Posts</Link> </li>
            <li className='nav-item'><Link  className="nav-link" to={"#"}>My posts</Link></li>
          </ul>
        </div>
        <ul className='nav-right'>
          <li className='nav-item'><Link  className="nav-link" to={"#"}>login</Link></li>
          <li className='nav-item'><Link  className="nav-link" to={"#"}>logout</Link></li>
        </ul>
      </div>
    </>
  )
}

export default App
