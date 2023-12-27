import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { ErrorPage, Home, Login, Logout, Post } from "./views"
import { authUser, checkAuth, loginAction, logoutAction } from './redux/Slices/AuthSlice.ts'
import { useDispatch, useSelector } from "react-redux";

function App() {

  const is_authenticated = useSelector(checkAuth);
  const asd = useSelector(authUser)

  const dispatch = useDispatch<any >();
  const handleLogout = (e:React.MouseEvent)=> {
     e.preventDefault;
      dispatch(logoutAction());
      

  }
  console.log(asd)
  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <p className='nav-item nav-heading'><Link className="nav-link" to={"/"}><span>Posts</span></Link></p>

          <ul className='flex item-center'>
            {is_authenticated ? (
              <li className='nav-item'><Link className="nav-link" to={"#"}><span>Add Post</span></Link> </li>
            ) : ''
            }

          </ul>
        </div>
        <ul className='nav-right'>

          {is_authenticated ? (
            <li className='nav-item'><Link className="nav-link" to={"/logout"} onClick={handleLogout}> <span>Logout</span> </Link></li>
          ) : (
            <li className='nav-item'><Link className="nav-link" to={"/login"}> <span>login</span> </Link></li>
          )}

        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Navigate to={"/login"} />} />
        <Route path="/posts" element={<Navigate to={"/"} />} />
        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/post" element={<Navigate to={"/"} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
