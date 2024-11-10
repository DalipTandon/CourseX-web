const Header=()=>{
    return(
        <div className="navbar bg-base-300">
        <div className="navbar-start mx-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Courses</a></li>
              <li>
                <a>More</a>
                <ul className="p-2">
                  <li><a>Admin Login</a></li>
                  <li><a>Testimonials</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">CourseX</a>
        </div>
        <div className="navbar-center hidden lg:flex border-gray-500 bg-base-200 py-2  rounded-full font-bold ">
          <ul className="menu menu-horizontal px-3 text-white">
            <li><a>Courses</a></li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2">
                  <li><a>Login As Admin</a></li>
                  <li><a>Testimonials</a></li>
                </ul>
              </details>
            </li>
            <li><a>FAQs</a></li>
          </ul>
        </div>
        <div className="navbar-end p-2   ">
          <a className="btn  border- bg-base-200 py-2  rounded-full font-bold text-white">Login</a>
        </div>
      </div>
    )
}

export default Header;