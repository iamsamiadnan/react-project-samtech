
import { BiUserCircle } from 'react-icons/bi'
import { AuthContext } from '../../providers/AuthProvider'
import { useContext } from 'react'

export default function Dashboard() {

    const {user} = useContext(AuthContext)
    console.log(user)
   
  return (
    <div>
        <div><h1 className='text-4xl mb-5'>Dashboard</h1></div>
        <div className="grid grid-cols-3 gap-6">
			<div className="flex flex-col items-center gap-3 border border-gray-500 p-6 rounded">
				<BiUserCircle className='text-7xl'/>
                {
                   
                }
			</div>
			<div className='col-span-2 border border-gray-500 p-6 rounded'>
				<div>
                    <p>
                    <b>Registration and Ticket Purchase:</b><br/>
                    To participate in our event, the initial step involves registering and acquiring your event passes. Simply head over to our event's official website, where you'll discover comprehensive details about the event, such as its date, venue, and ticket pricing. Pick the ticket category that best aligns with your requirements and proceed to finalize your purchase. You generally have the option to either purchase your tickets online or buy them in-person at the event's entrance. We strongly advise purchasing your tickets in advance to ensure your attendance and to skip lengthy queues on the event day.

                    </p>
                </div>
			</div>
		</div>
    </div>
  )
}
