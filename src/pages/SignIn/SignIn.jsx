import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
  return (
<div className="card flex-shrink-0 w-full max-w-sm border border-gray-500 rounded bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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
