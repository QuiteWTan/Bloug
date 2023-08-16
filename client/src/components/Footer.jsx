import Logo from '../components/navbar/brand.png'
import InstagramPhoto from './footer/Footer1.png'
const Footer = () => {
    return(
        <div className="w-full flex justify-center bg-slate-50 py-6 px-4 border-t-4 shadow-md bottom-0 mt-6">
            <div className="max-w-[1200px] grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-footer gap-y-8 min-[400px]:gap-4 lg:gap-12">
                <div className='flex flex-col gap-4'>
                    <img src={Logo} alt="" className='w-[100px]'/>
                    <h1 className='text-xs font-poppins'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </h1>
                    <div className='flex flex-row justify-evenly min-[400px]:justify-normal min-[400px]:gap-2 lg:gap-6'>
                        <div className='p-1 rounded-full bg-gray-400 flex items-center justify-center'>
                            <box-icon name='instagram' type='logo' size='26px' color='white'></box-icon>
                        </div>
                        <div className='p-1 rounded-full bg-gray-400 flex items-center justify-center'>
                            <box-icon name='twitter' type='logo' color='white'></box-icon>
                        </div>
                        <div className='p-1 rounded-full bg-gray-400 flex items-center justify-center'>
                            <box-icon box-icon name='facebook' type='logo' color='white'></box-icon>
                        </div>
                        <div className='p-1 rounded-full bg-gray-400 flex items-center justify-center'>
                            <box-icon name='github' type='logo' color='white'></box-icon>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-bold font-Robot text-primary pb-4'> CONTACT US</h1>
                    <ul className='text-sm text-gray-500 font-poppins flex flex-col gap-3'>
                        <li className='flex flex-row items-center gap-2'>
                            <box-icon name='phone' type='solid' color='gray' size='20px'></box-icon> 
                            +62 822 5634 6475
                        </li>
                        <li className='flex flex-row items-center gap-2'>
                            <box-icon name='envelope' color='gray' size='20px'></box-icon> 
                            Bloug123@gmail.com
                        </li>
                        <li className='flex flex-row items-center gap-2'>
                            <box-icon name='business' type='solid' color='gray' size='20px'> </box-icon> 
                            43413 Anastasia Bypass, Garland, Garland (09851)
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold font-Robot text-primary pb-2'>NAVIGATE</h1>
                    <ul className='px-2 text-gray-500 flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Something</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold font-Robot text-primary pb-2'>INSTAGRAM</h1>
                    <div className='grid grid-cols-4 gap-3'>
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                        <img src={InstagramPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;