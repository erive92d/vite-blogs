import { useState } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";// Assuming you are using React Router for routing
import auth from "../../utils/auth";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const userData = auth.loggedIn() ? auth.getProfile().data : null

  return (
    <Navbar
      fluid
      rounded
      className="w-100"
    >
      <Navbar.Brand href="/">

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tech Blogs
        </span>
      </Navbar.Brand>

      <div className="flex">
        {auth.loggedIn() &&
          <Dropdown
            inline
            label={<Avatar alt="User settings" img={userData.profilePic || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"} rounded />}
          >
            <Dropdown.Header>

              <span className="block text-sm">
                {userData?.name}
              </span>
              <span className="block truncate text-sm font-medium">
                {userData?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a href="/me">
                Profile
              </a>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item >
              <a href="/" onClick={() => auth.logout()}>
                Sign out

              </a>

            </Dropdown.Item>
          </Dropdown>}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

        {auth.loggedIn() ?
          null
          :
          (
            <>
              <Navbar.Link href="/login">
                Login
              </Navbar.Link>
              <Navbar.Link href="/signup" className=" hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</Navbar.Link>


            </>

          )

        }

      </Navbar.Collapse>
    </Navbar>
    // <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //           <a href="/" className="text-white text-lg font-bold">Blogs</a>
    //         </div>
    //       </div>
    //       <div className="hidden md:block">
    //         <div className="ml-4 flex items-center space-x-4">
    //           <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
    //           <a href="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
    //           <a href="/me" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
    //           {auth.loggedIn() ? <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() => auth.logout()}>Log Out</a>
    //             : <a href="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log In</a>
    //           }

    //         </div>
    //       </div>
    //       <div className="md:hidden">
    //         <button
    //           type="button"
    //           className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //           onClick={handleMobileMenuToggle}
    //         >
    //           <span className="sr-only">Open mobile menu</span>
    //           <svg
    //             className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //           <svg
    //             className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
    //     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //       <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
    //       <a href="/me" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Profile</a>
    //       {auth.loggedIn() ? <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() => auth.logout()}>Log Out</a>
    //         : <div>
    //           <a href="/signup" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</a>

    //           <a href="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log In</a>
    //         </div>
    //       }        </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
