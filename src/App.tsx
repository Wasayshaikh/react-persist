import { Link, NavLink, Navigate, Route,  Routes } from "react-router-dom"
import { ErrorPage, Home, Login, Logout, Post } from "./views"
function App() {

  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <p className='nav-item nav-heading'><Link className="nav-link" to={"/"}><span>Posts</span></Link></p>

          <ul className='flex item-center'>

            <li className='nav-item'><Link  className="nav-link" to={"#"}><span>Add Post</span></Link> </li>
          </ul>
        </div>
        <ul className='nav-right'>
          <li className='nav-item'><Link  className="nav-link" to={"/login"}> <span>login</span> </Link></li>
          <li className='nav-item'><Link  className="nav-link" to={"/logout"}> <span>logout</span> </Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />}/>
        <Route path="/posts" element={<Navigate to={"/"}/>} />
        <Route path="/home" element={<Navigate to={"/"}/>} />
        <Route path="/post" element={<Navigate to={"/"}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
