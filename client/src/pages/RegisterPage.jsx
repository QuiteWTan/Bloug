import { useState } from "react"

const RegisterPage = () => {
    const [Remember,setRemember] = useState(false)

    return(
        <div className="w-full flex justify-center items-center h-screen bg-primary px-2">
            <div className="w-[280px] md:w-[350px] bg-white py-4 px-2 md:px-8 flex flex-col items-center shadow-md border rounded-sm">
                <h1 className="font-Robot text-3xl md:text-4xl font-bold">Register</h1>
                <hr className="w-1/5 border-2 my-4 border-primary"/>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full">
                        <input type="text" className="focus:outline-none w-full" placeholder="Username"/>
                        <box-icon name='user' color='gray'></box-icon>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full">
                        <input type="text" className="focus:outline-none w-full" placeholder="Email"/>
                        <box-icon name='envelope' color='gray'></box-icon>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full">
                        <input type="text" className="focus:outline-none w-full" placeholder="Password"/>
                        <box-icon name='lock-alt' color='gray'></box-icon>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full">
                        <input type="text" className="focus:outline-none w-full" placeholder="Confirm Password"/>
                        <box-icon name='lock-alt' color='gray'></box-icon>
                    </div>
                </div>
                <div className='flex flex-row items-center w-full py-4'>
                    <div className={`border-2 w-5 h-5 flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out rounded-sm ${Remember ? 'bg-primary border-primary' : ''}`} onClick={() => setRemember(!Remember)}>
                        <box-icon name='check' size='20px' color='white'></box-icon>
                    </div>
                    <label htmlFor="remember" className="text-xs ml-2 font-poppins">I Agree with the <span className="text-gray-400 underline">Terms and Conditions</span></label>
                </div>
                <button className="bg-primary text-white rounded-sm py-2 my-4 w-full text-lg opacity-80 hover:opacity-100 transition-all duration-300">Login</button>
            </div>
        </div>
    )
}

export default RegisterPage