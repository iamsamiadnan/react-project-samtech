import React, { useContext, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { BiLogoGoogle } from 'react-icons/bi';

export default function SignIn() {
  const {signInUser, signInGoogleUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const formRef = useRef();


  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const pass = form.get('pass')


    signInUser(email, pass)
    .then(res => {

      toast.success('Welcome Back!');
      navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
      toast.error(err.code)
    })

  }

  const handleSignInGoogle = () => {
   
    signInGoogleUser()
    .then(res => {
  
      toast.success('Welcome Back!');
      navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
      toast.error(err.code)
    })

  }





  return (
<div className="card flex-shrink-0 w-full max-w-sm border border-gray-500 rounded bg-base-100">
      <form className="card-body" onSubmit={e => handleSignIn(e)} ref={formRef}>
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
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-4">Login</button>

          <button type="button" className='btn btn-accent text-white' onClick={handleSignInGoogle}> <BiLogoGoogle className='text-xl' /> Google Sign In</button>
        </div>
        <label className="label">
            Don't have an account? <NavLink to='/signup'>Sign Up</NavLink>
          </label>
      </form>
    </div>
  )
}
