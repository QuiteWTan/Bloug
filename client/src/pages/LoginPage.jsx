import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [Remember,setRemember] = useState(true)
    const [Input, setInput] = useState({
        username:'',
        password:'',
        rememberMe : false,
    })

    const Login = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const ValidateRegisterInput= (e) => {
        e.preventDefault()
        const warnings = {
            username: "Username Must Not Be Empty",
            password: "Password Must Not Be Empty",
        };

        let Warning = false
        const resetWarnings = () => {
            for (const key in warnings) {
                document.getElementById(`warning${key.charAt(0).toUpperCase() + key.slice(1)}`).innerText = '';
            }
        };
    
        resetWarnings();
        for (const field in Input) {
            if (Input[field] === '' && field !== 'terms') {
                document.getElementById(`warning${field.charAt(0).toUpperCase() + field.slice(1)}`).innerText = warnings[field];
                Warning = true
            }
        }

        if(Warning == false){
            handleSubmit(e);
        }
    }

    const handleSubmit = async e => {
        const dataToSend = {
            username: Input.username,
            password: Input.password,
        };
        console.log(dataToSend)
        try{
            const Res = await axios.post("/api/auth/login",dataToSend)
            console.log(Res);
            if(Res.status <= 400){
                Login.fire({
                    icon: 'success',
                    title: 'Account has been created'
                  })
                    setTimeout(() => {
                        navigate("/login")
                    }, 3000);
            }
        }catch(err){
            console.log(err)
        }

    }

    return(
        <div className="w-full flex justify-center items-center h-screen bg-primary px-2">
            <form 
                className="w-[280px] md:w-[350px] bg-white py-4 px-4 md:px-8 flex flex-col items-center shadow-md border rounded-sm" 
                onSubmit={ValidateRegisterInput} 
                >
                <h1 className="font-Robot text-3xl md:text-4xl font-bold">Login</h1>
                <hr className="w-1/5 border-2 my-4 border-primary"/>
                <div className="flex flex-col py-4 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" 
                            placeholder="Username"
                            value={Input.username}
                            onChange={e => setInput({ ...Input, username: e.target.value })}
                            />
                        <box-icon name='envelope' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningUsername"></h1>
                    </div>
                </div>
                <div className="flex flex-col py-4 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" 
                            placeholder="Password"
                            value={Input.password}
                            onChange={e => setInput({ ...Input, password: e.target.value })}
                            />
                        <box-icon name='lock-alt' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningPassword"></h1>
                    </div>
                </div>
                <div className='flex flex-row items-center w-full py-6'>
                    <div 
                        className={`border-2 w-5 h-5 flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out rounded-sm ${Remember ? 'bg-primary border-primary' : ''}`} 
                        onClick={() => {
                            setRemember(!Remember);
                            setInput({ ...Input, rememberMe: Remember});
                        }}
                        >
                        <box-icon name='check' size='20px' color='white'></box-icon>
                    </div>
                    <label htmlFor="remember" className="text-sm ml-2 font-poppins">Remember me</label>
                </div>
                <button type="submit" className="bg-primary text-white rounded-sm py-2 my-4 w-full text-lg opacity-80 hover:opacity-100 transition-all duration-300">Login</button>
            </form>
        </div>
    )
}

export default LoginPage