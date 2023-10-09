import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

export default function SignIn() {
  const {signInUser} = useContext(AuthContext)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const pass = form.get('pass')

    signInUser(email, pass)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  }


  return (
<div className="card flex-shrink-0 w-full max-w-sm border border-gray-500 rounded bg-base-100">
      <form className="card-body" onSubmit={e => handleSignIn(e)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <label className="label">
            Don't have an account? <NavLink to='/signup'>Sign Up</NavLink>
          </label>
      </form>
    </div>
  )
}
