import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm border border-gray-500 rounded bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name*</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password*</span>
          </label>
          <input type="password" name="pass" placeholder="******" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password*</span>
          </label>
          <input type="password" name="cpass" placeholder="******" className="input input-bordered" required />
          <label className="label">
            Already have an account? <NavLink to='/signin'>Sign In</NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  )
}
