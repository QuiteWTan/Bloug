import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [Remember,setRemember] = useState(true)
    const [Input, setInput] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword: '',
        terms : false,
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
            email: "Email Must Not Be Empty",
            password: "Password Must Not Be Empty",
            confirmPassword: "Confirm Password Must Not Be Empty",
            terms: "Terms must be checked!"
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
            } else if (field === 'terms' && Input[field] === false) {
                document.getElementById("warningTerms").innerText = warnings[field];
                Warning = true
            }
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!emailRegex.test(Input.email)){
            document.getElementById('warningEmail').innerText = 'Incorrect Email Format';
            Warning = true;
        }
        if(Input.username.length < 5){
            document.getElementById('warningUsername').innerText = 'Username must be more than 5 character';
            Warning = true
        } 
        if(Input.password !== Input.confirmPassword){
            document.getElementById('warningPassword').innerText = 'Password and Confirm Password not match';
            document.getElementById('warningConfirmPassword').innerText = 'Password and Confirm Password not match';
            Warning = true
        }
        if(Warning == false){
            handleSubmit(e);
            Warning = true
        }
    }

    const handleSubmit = async e => {
        const dataToSend = {
            username: Input.username,
            email: Input.email,
            password: Input.password,
        };
        try{
            const Res = await axios.post("/api/auth/register",dataToSend)
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
        <form className="w-full flex justify-center items-center h-screen bg-primary px-2" onSubmit={ValidateRegisterInput} >
            <div className="w-[280px] md:w-[350px] bg-white py-4 px-2 md:px-6 flex flex-col items-center shadow-md border rounded-sm gap-2">
                <h1 className="font-Robot text-3xl md:text-4xl font-bold">Register</h1>
                <hr className="w-1/5 border-2 my-4 border-primary"/>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" name="username" 
                            placeholder="Username" 
                            value={Input.username}
                            onChange={e => setInput({ ...Input, username: e.target.value })}/>
                        <box-icon name='user' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningUsername"></h1>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" 
                            name="email" 
                            placeholder="Email ex:blog@gmail.com" 
                            value={Input.email}
                            onChange={e => setInput({ ...Input, email: e.target.value })}/>
                        <box-icon name='envelope' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningEmail"></h1>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" 
                            name="password" 
                            placeholder="Password" 
                            value={Input.password}
                            onChange={e => setInput({ ...Input, password: e.target.value })}/>
                        <box-icon name='lock-alt' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningPassword"></h1>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-full">
                    <div className="px-2 pb-1 pt-2 border-b-2 border-primary flex flex-row items-center w-full relative">
                        <input 
                            type="text" 
                            className="focus:outline-none w-full" 
                            placeholder="Confirm Password" 
                            value={Input.confirmPassword}
                            onChange={e => setInput({ ...Input, confirmPassword: e.target.value })}/>
                        <box-icon name='lock-alt' color='gray'></box-icon>
                        <h1 className="text-poppins absolute bottom-[-70%] text-sm text-red-500" id="warningConfirmPassword"></h1>
                    </div>
                </div>
                <div className='flex flex-row items-center w-full py-4 relative'>
                    <div className={`border-2 w-5 h-5 flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out rounded-sm ${Remember ? '' : 'bg-primary border-primary' }`} 
                        onClick={() => {
                            setRemember(!Remember);
                            setInput({ ...Input, terms: Remember});
                        }}>
                        <box-icon name='check' size='20px' color='white'></box-icon>
                    </div>
                    <label htmlFor="remember" className="text-xs ml-2 font-poppins">I Agree with the <span className="text-gray-400 underline">Terms and Conditions</span></label>
                    <h1 className="text-poppins absolute bottom-[-20%] text-sm text-red-500" id="warningTerms"></h1>
                </div>
                <button type="submit" className="bg-primary text-white rounded-sm py-2 my-4 w-full text-lg opacity-80 hover:opacity-100 transition-all duration-300">Login</button>
            </div>
        </form>
    )
}

export default RegisterPage