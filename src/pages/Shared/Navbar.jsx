import {  createContext, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


export default function Navbar() {
	const { user, signOutUser } = useContext(AuthContext);
	const navigate = useNavigate()
	const links = (
		<>
			<div className="flex gap-2">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>

				{user ? (
					<>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li>
							<NavLink to="/notification">Notifcation</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to="/signin">Sign In</NavLink>
						</li>
						<li>
							<NavLink to="/signup">Sign Up</NavLink>
						</li>
					</>
				)}
			</div>
		</>
	);

	const handleSignOut = () => {
		signOutUser()
			.then((res) => {
				toast.success("Signed Out!");
				navigate('/')
			})
			.catch((err) => {
				toast.error(err);
			});
	};
	return (
		<div className="navbar bg-base-100 mb-14">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						Menu
					</label>
					<ul
						tabIndex="0"
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{links}
					</ul>
				</div>

				<NavLink className="btn btn-ghost normal-case text-xl" to="/">
					SAMTECH EXPO
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<div className="flex items-center gap-4">
							<div>
								<span>{user && user.displayName}</span>
							</div>
							<div className="avatar online">
								<div className="w-10 h-10 rounded-full">
									<img className="object-cover" src={user && user.photoURL} />
								</div>
							</div>
							<a className="btn" onClick={handleSignOut}>
								Sign Out
							</a>
						</div>
					</>
				) : (
					""
				)}
			</div>
		</div>
	);
}
