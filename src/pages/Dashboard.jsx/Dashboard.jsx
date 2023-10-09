import React, { useContext } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { AuthContext } from '../../providers/AuthProvider'

export default function Dashboard() {

    const {user} = useContext(AuthContext)
console.log(user.email)
   
  return (
    <div>
        <div><h1 className='text-4xl mb-5'>Dashboard</h1></div>
        <div className="grid grid-cols-3 gap-6">
			<div className="flex flex-col items-center gap-3 border border-gray-500 p-6 rounded">
				<BiUserCircle className='text-7xl'/>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <span></span>
                    
                    </> : ""
                }
			</div>
			<div className='col-span-2 border border-gray-500 p-6 rounded'>
				<div>
                    <p>
                    <b>Registration and Ticket Purchase:</b><br/>
To join our event, the first step is to register and purchase your tickets. Visit our event website, where you'll find detailed information about the event, including the date, location, and ticket pricing. Select the type of ticket that suits your needs and follow the prompts to complete your purchase. You can typically choose between online ticketing or buying tickets at the door. We recommend purchasing tickets in advance to secure your spot and avoid long lines on the event day.
                    </p>
                </div>
			</div>
		</div>
    </div>
  )
}
