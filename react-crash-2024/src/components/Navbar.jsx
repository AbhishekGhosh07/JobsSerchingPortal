import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';
const Navbar = () => {
    const linkClass = ({isActive})=>isActive? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' ;
    const loggedIn = useSelector(state => state.loginDetails);
    console.log("loggedin",loggedIn);
    const dispatch = useDispatch();
    const {signOut} = bindActionCreators(actionCreators,dispatch);
    return (
    <>
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <Link to="/">
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              
             
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Switch Jobs</span
              >
              
            </a>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home
                  </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  >Jobs</NavLink>
                {
                  (!loggedIn) && <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink>
                }
                
                {(loggedIn) ?
                <NavLink
                  to="/sign-up"
                  className={linkClass}
                  >SignUp
                </NavLink>
                  :
                  <NavLink
                  to="/sign-up"
                  className={linkClass}
                  >
                    <button onClick={()=>{
                      console.log("button clicked")
                      signOut();
                      console.log('state',loggedIn)}}>Signout</button>
                  </NavLink>
                  
                }
                
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar