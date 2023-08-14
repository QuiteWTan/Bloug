import Logo from '../components/navbar/brand.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
const Navbar = () => {
    const [icon,setIcon] = useState(false)
    const BurgerMenuStyles = ['fixed flex left-[-100%] top-0 h-full  ease-in-out duration-500','fixed flex left-0 top-0 h-full border-r border-r-gray-900 text-white bg-slate-50 ease-in-out duration-500 justify-center items-center w-[100%]'];
    return(
        <div className="w-full h-[60px] md:h-[70px] px-4 lg:px-12 py-3 absolute shadow-md font-Robot">
            <div className='flex flex-row justify-between h-full'>
                <div className='h-full flex flex-row items-end gap-8 lg:gap-16'>
                    <img 
                        src={Logo} 
                        alt=""  
                        className='w-full h-full '
                    />
                    <div className='hidden md:flex flex-row gap-8 lg:gap-16  w-full '>
                        <Link>Home</Link>
                        <Link>Home</Link>
                        <Link>Home</Link>
                        <Link>Home</Link>
                    </div>
                </div>
                <div className='hidden md:flex flex-row gap-4 font-poppins font-bold items-center'>
                    <button className='px-8 py-2 rounded-md bg-primary text-white shadow-md'>
                        <Link>
                            Login
                        </Link>
                    </button>
                    <button className='px-4 py-2 rounded-md border-2 border-primary shadow-sm'>
                        <Link>
                            Register
                        </Link>
                    </button>
                </div>

                <button className='flex md:hidden items-center justify-center' onClick={() => setIcon(!icon)}>
                    <box-icon name='menu' size="30px"></box-icon>
                </button>
                {
                    icon && (
                        <div className={`md:hidden transition-all ${icon ? BurgerMenuStyles[1] : BurgerMenuStyles[0]}`} onClick={() => setIcon(!icon)}>
                            <div className='h-full flex flex-col items-center  gap-8 py-12 '>
                                <img 
                                    src={Logo} 
                                    alt=""  
                                    className='w-[120px] '
                                />
                                <div className='flex flex-col items-center justify-center gap-6  w-full'>
                                    <Link className='px-12 w-full py-2 bg-primary text-center rounded-sm'>Home</Link>
                                    <Link className='px-12 w-full py-2 bg-primary text-center rounded-sm'>Home</Link>
                                    <Link className='px-12 w-full py-2 bg-primary text-center rounded-sm'>Home</Link>
                                    <Link className='px-12 w-full py-2 bg-primary text-center rounded-sm'>Home</Link>
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
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;