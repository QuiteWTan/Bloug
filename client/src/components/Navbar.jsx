import Logo from '../components/navbar/brand.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { AuthContextState } from '../context/authContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClassName = (linkName) => {
        if (activeLink === linkName) {
            return "text-primary font-bold";
        }
        return "text-gray-400";
    };
    const navigate = useNavigate();
    const [icon,setIcon] = useState(false)
    const { User, Logout } = AuthContextState();

    const SuccessLogout = Swal.mixin({
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

    const doLogOut = async e => {
        try{
            const Res = await Logout()
            if(Res.status < 400){
                SuccessLogout.fire({
                    icon: 'info',
                    title: 'User has logout'
                  })
                setTimeout(() => {
                    navigate("/login")
                }, 3000);
            }
        }catch(err){
            console.log(err)
        }
    }
    const BurgerMenuStyles = ['fixed flex left-[-100%] top-0 duration-500 w-[100%] justify-center items-center','fixed flex left-0 top-0 h-full border-r border-r-gray-900 text-white bg-slate-50  duration-500 justify-center items-center w-[100%]'];
    return(
        <div className="w-full px-4 lg:px-12 shadow-md font-Robot flex flex-row md:flex-col items-center py-4 md:py-0 justify-between md:justify-center">
            <div className='md:pt-2'>
                <img 
                    src={Logo} 
                    alt=""  
                    className='w-[150px] '
                />
            </div>
            <div className='flex flex-row gap-4 w-full justify-evenly'>
                <div className='w-full hidden md:flex items-center'>
                    <Link to={"/createblog"} className='border-primary text-primary border-2 text-lg px-12 py-1 rounded-md hover:bg-primary hover:text-white transition-colors duration-300'>
                        Write
                    </Link>
                </div>
                <div className='h-full hidden md:flex flex-row items-center gap-8 lg:gap-16 w-full'>
                    <div className='flex flex-row gap-8 lg:gap-16  w-full py-4 items-center justify-center'>
                        <Link
                            to="/?category=art"
                            className={linkClassName("art")}
                            onClick={() => handleLinkClick("art")}
                        >
                            Art
                        </Link>
                        <Link
                            to="/?category=science"
                            className={linkClassName("science")}
                            onClick={() => handleLinkClick("science")}
                        >
                            Science
                        </Link>
                        <Link
                            to="/?category=technology"
                            className={linkClassName("technology")}
                            onClick={() => handleLinkClick("technology")}
                        >
                            Technology
                        </Link>
                        <Link
                            to="/?category=cinema"
                            className={linkClassName("cinema")}
                            onClick={() => handleLinkClick("cinema")}
                        >
                            Cinema
                        </Link>
                        <Link
                            to="/?category=design"
                            className={linkClassName("design")}
                            onClick={() => handleLinkClick("design")}
                        >
                            Design
                        </Link>
                        <Link
                            to="/?category=food"
                            className={linkClassName("food")}
                            onClick={() => handleLinkClick("food")}
                        >
                            Food
                        </Link>
                    </div>
                </div>
                {
                    User ? 
                    <div className='hidden md:flex flex-row gap-4 font-poppins font-bold items-center justify-end w-full py-2'>
                        <button className='px-8 py-2 rounded-md bg-primary text-white shadow-md'>
                            <button onClick={doLogOut}>
                                Logout
                            </button>
                        </button>
                    </div>
                    :
                    <div className='hidden md:flex flex-row gap-4 font-poppins font-bold items-center justify-end w-full py-2'>
                        <button className='px-8 py-2 rounded-md bg-primary text-white shadow-md'>
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                        <button className='px-4 py-2 rounded-md border-2 border-primary shadow-sm'>
                            <Link to="/register">
                                Register
                            </Link>
                        </button>
                    </div>
                }
                <div className={`md:hidden z-10 ${icon ? BurgerMenuStyles[1] : BurgerMenuStyles[0]}`} onClick={() => setIcon(!icon)}>
                    <div className='h-full flex flex-col items-center gap-8 py-12 '>
                        <img 
                            src={Logo} 
                            alt=""  
                            className='w-[120px] '
                        />
                        <div className='flex flex-col items-center justify-center gap-6  w-full'>
                        <Link
                            to="/?category=art"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Art
                        </Link>
                        <Link
                            to="/?category=science"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Science
                        </Link>
                        <Link
                            to="/?category=technology"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Technology
                        </Link>
                        <Link
                            to="/?category=cinema"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Cinema
                        </Link>
                        <Link
                            to="/?category=design"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Design
                        </Link>
                        <Link
                            to="/?category=food"
                            className="px-12 w-full py-2 bg-primary text-center rounded-sm"
                        >
                            Food
                        </Link>
                        </div>
                        <div className='flex flex-col gap-4 font-poppins font-bold items-center w-full text-primary'>
                            <Link className='px-12 w-full py-2 rounded-sm border-2 border-primary shadow-sm text-center'>
                                Login
                            </Link>
                            <Link className='px-12 w-full py-2 rounded-sm border-2 border-primary shadow-sm text-center'>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className='flex md:hidden items-center justify-center' onClick={() => setIcon(!icon)}>
                    <box-icon name='menu' size="30px"></box-icon>
            </button>
        </div>
    )
}

export default Navbar;