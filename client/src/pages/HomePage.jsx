import Navbar from "../components/Navbar";
const HomePage = () => {
    const posts = [
        {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
        id: 6,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];
    return(
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[1200px] w-full py-4 px-4 grid grid-rows-feat4 min-[370px]:grid-rows-feat3 grid-cols-1 min-[370px]:grid-cols-2 md:grid-rows-feat1 md:grid-cols-3 md:gap-4 place-items-center z-1">
                {
                        posts.slice(0,3).map((post,index) => (
                            <div className={`${index == 0 ? 'row-span-2 min-[370px]:col-span-2 ' : 'md:row-span-1 md:col-span-1'} bg-white w-full h-full font-Robot rounded-sm overflow-hidden relative z-1`}>
                                <img src={post.img} alt="" className="w-full h-full absolute hover:scale-110"/>
                                <div className="absolute w-full h-full bg-gray-600 opacity-40"></div>
                                <div className="px-4 flex flex-col justify-between absolute bottom-4 text-gray-50 font-poppins">
                                    <div className="py-4">
                                        <h1 className={`py-2 ${index == 0 ? 'text-3xl max-w-[450px]' : 'text-md max-w-[200px]'}`}>{post.title}</h1>
                                        <h1 className="font-bold font-poppins text-gray-100">Category </h1>
                                    </div>
                                    <button className="w-fit flex items-center justify-center p-2 rounded-full border-2 border-white"><box-icon name='arrow-back' rotate={180} color='white' size='20px'></box-icon></button>
                                </div>
                            </div>   
                        ))
                    }
            </div>
            <div className="max-w-[1100px] w-full py-4 px-4">
                <h1 className="flex flex-row items-center text-3xl font-Robot font-bold w-full">Related Post <hr className="w-full border-2 border-gray-400"/></h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 place-items-center">
                    {
                        posts.map((post,index) => (
                            <div className={`w-full flex flex-col h-full min-[400px]:h-fit md:h-full ${index % 2 == 1 ? 'min-[400px]:flex-row' : 'min-[400px]:flex-row-reverse'} md:flex-row py-4 gap-2 lg:gap-4`} key={post.id}>
                                <div className="max-h-[250px] md:max-h-[380px]">
                                    <img src={post.img} alt="" className=" md:max-w-[250px] w-full rounded-md shadow-md object-fill h-full"/>
                                </div>
                                <div className="font-poppins max-w-[350px] md:max-w-[200px] lg:max-w-[250px] flex flex-col justify-between">
                                    <div>
                                        <h1 className="md:text-lg font-bold">{post.title}</h1>
                                        <p className="text-xs lg:text-sm py-2 md:py-4">{post.desc}</p>
                                    </div>
                                    <button className="w-full bg-primary text-white py-2 rounded-sm">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="max-w-[1100px] w-full py-4 px-4">
                <h1 className="flex flex-row items-center text-3xl font-Robot font-bold w-full">Latest Post<hr className="w-full border-2 border-gray-400"/></h1>
                <div className="w-full grid grid-rows-feat5 min-[380px]:grid-rows-feat4 grid-cols-1 min-[380px]:grid-cols-2 md:grid-rows-feat2 md:grid-cols-4 gap-4 lg:gap-8 place-items-center py-6 lg:px-12">
                    {
                        posts.slice(0,5).map((post,index) => (
                            <div className={`${index == 0 ? 'row-span-2 min-[380px]:col-span-2 ' : 'row-span-1 col-span-1'} bg-white w-full h-full grid grid-rows-2 font-Robot rounded-sm overflow-hidden shadow-md border-2 relative`}>
                                <img src={post.img} alt="" className="w-full h-full"/>
                                <div className="px-2 lg:px-4 py-2 lg:py-4 flex flex-col justify-between">
                                    <div className="text-gray-500">
                                        <h1 className="text-md px-2 lg:px-4 py-2 text-center bg-primary text-white absolute top-[50%] left-[50%] w-1/2 translate-x[-50%] translate-y-[-50%]">Category</h1>
                                        <h1 className="font-bold font-poppins text-gray-500 text-sm"> 11-09-2023 </h1>

                                        <h1 className={`font-bold pb-2 ${index == 0 ? 'text-xl md:text-2xl' : 'text-md'}`}>{post.title}</h1>
                                        <p className={`${index == 0 ? 'text-md' : ''}`}>{index == 0 ?  post.desc : ''}</p>
                                    </div>
                                    <button className="absolute bottom-2 right-2 rounded-full p-1 flex justify-center items-center border-black border-2"><box-icon name='arrow-back' rotate={180} size='20px'></box-icon></button>

                                </div>
                            </div>   
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;