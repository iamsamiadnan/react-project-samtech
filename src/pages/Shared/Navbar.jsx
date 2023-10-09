import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Navbar() {
	const { user, signOutUser } = useContext(AuthContext);
	const links = <>
		
		

		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='details'>Details</NavLink></li>
	</>

	const handleSignOut = () => {
		signOutUser()
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	}
	return (
		<div className="navbar bg-base-100 mb-14">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						Button
					</label>
					<ul
						tabIndex="0"
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{links}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
				{links}
				</ul>
			</div>
			<div className="navbar-end">
				

				{
					user ? <a className="btn" onClick={handleSignOut}>Sign Out</a> : 
					<>
						<a className="btn" >Login</a>
						<a className="btn">Register</a>
					</>
				}
			</div>
		</div>
	);
}
