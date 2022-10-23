import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }
    return (
        <header className="p-4 bg-white text-black">
	<div className="container flex justify-between h-16 mx-auto">
		<Link to='/' rel="noopener noreferrer" hidden
         aria-label="Back to homepage" className="flex items-center p-2">
			
            <img className='w-[120px]' src={logo} alt="" />
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-orange-600 font-bold">Home</Link>
			</li>
			<li className="flex">
				<Link to='/destination' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-orange-600 font-bold">Destination</Link>
			</li>
			<li className="flex">
				<Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-orange-600 font-bold">Blog</Link>
			</li>
			<li className="flex">
				<Link to='/contact' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-orange-600 font-bold">Contact</Link>
			</li>
            <div className="items-center flex-shrink-0 hidden lg:flex">
                {
                    user?.uid ? 
                    <>
                      <li className="flex">
				        <Link to='#' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-orange-600 font-bold">{user.displayName}</Link>
			           </li>
                       <button onClick={handleLogout} className="self-center px-8 py-3 font-semibold rounded bg-orange-400 hover:bg-orange-500 text-gray-900">LogOut</button>  
                    </>
                    :
			        <Link to='/login'><button className="self-center px-8 py-3 font-semibold rounded bg-orange-400 hover:bg-orange-500 text-gray-900">Login</button></Link>
                }
		</div>
		</ul>
		
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				{/* <path strokeLinecap="round"  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> */}
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;