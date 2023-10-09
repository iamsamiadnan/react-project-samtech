import { NavLink } from "react-router-dom";

export default function Navbar() {
	const links = <>
		
		

		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='details'>Details</NavLink></li>
	</>
	return (
		<div className="navbar bg-base-100">
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
				<a className="btn">Login</a>
				<a className="btn">Register</a>
			</div>
		</div>
	);
}
