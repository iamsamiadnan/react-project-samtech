
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { updateCurrentUser } from 'firebase/auth';

export default function SignUp() {
const {createUser, updateUserProfile, signOutUser} = useContext(AuthContext)
const navigate = useNavigate()

const handleSignUp = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const url = form.get('url')
    const email = form.get('email')
    const pass = form.get('pass')
    const cpass = form.get('cpass')


    if(pass !== cpass) {
      toast.error("Password doesn't match. Please check again!");
      return;
    }
    if(pass.length < 6) {
      toast.error("Password is less than 6 characters!");
      return;
    }
    if(!/[A-Z]/.test(pass)) {
      toast.error("Password should contain at least 1 uppercase letter!")
      return;
    }
    if(!/[!#$%^&*]/.test(pass)) {
      toast.error("Password should contain at least 1 special character!")
      return;
    }


    createUser(email, pass)
    .then(res => {
    

      updateUserProfile(name, url)
      .then(() => {
        toast.success("Signed Up Successful! Please Login")
        signOutUser()
        navigate('/signin')
      })
      .catch(err => {
        toast.error(err.code)

      })
    })
    .catch(err => {
   
        toast.error(err)
    })
}

  return (
    <div className="card flex-shrink-0 w-full max-w-sm border border-gray-500 rounded bg-base-100">
      <form onSubmit={e => handleSignUp(e)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name*</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL*</span>
          </label>
          <input type="text" name="url" placeholder="photo url" className="input input-bordered" required />
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
