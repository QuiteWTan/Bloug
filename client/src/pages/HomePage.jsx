import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const HomePage = () => {
    const [categoryPosts,setCategoryPosts] = useState([]);
    const [newestPosts,setNewestPosts] = useState([])
    const [starterPosts,setStarterPosts] = useState([])
    const category = useLocation().search
    const [card,setCard] = useState(6)
    useEffect(() => {
        const fetchDataCategoryPost = async () => {
            try{
                const Res = await axios.get(`/api/posts${category}`)
                setCategoryPosts(Res.data);
            }catch(err){
                console.log(err)
            }
        }
        const fetchDataNewestPost = async () => {
            try{
                const Res = await axios.get(`/api/posts`)
                setNewestPosts(Res.data);
            }catch(err){
                console.log(err)
            }
        }
        const fetchDataStarterPost = async () => {
            try{
                const Res = await axios.get(`/api/posts`)
                setStarterPosts(Res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchDataCategoryPost()
        fetchDataNewestPost()
        fetchDataStarterPost()
    },[categoryPosts,newestPosts,starterPosts])
    
    const formatDate = (originalDate) => {
        const dateObject = new Date(originalDate);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }

    return(
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[1200px] w-full py-4 px-4 grid grid-rows-feat4 min-[370px]:grid-rows-feat3 grid-cols-1 min-[370px]:grid-cols-2 md:grid-rows-feat1 md:grid-cols-3 md:gap-4 place-items-center z-1">
                {
                        starterPosts.map((post,index) => (
                            <div className={`${index == 0 ? 'row-span-2 min-[370px]:col-span-2 ' : 'md:row-span-1 md:col-span-1'} bg-white w-full h-full font-Robot rounded-sm overflow-hidden relative z-1`}>
                                <img src={`../public/upload/${post.image}`} alt="" className="w-full h-full absolute hover:scale-110"/>
                                <div className="absolute w-full h-full bg-gray-600 opacity-40"></div>
                                <div className="px-4 flex flex-col justify-between absolute bottom-2 text-gray-50 font-poppins">
                                    <div className="py-4">
                                        <h1 className={`py-2 ${index == 0 ? 'text-3xl max-w-[450px]' : 'text-md max-w-[200px]'}`}>{post.title}</h1>
                                        <h1 className="font-bold font-poppins text-gray-100 text-xl">{post.category.charAt(0).toUpperCase() + post.category.slice(1).toLowerCase()}</h1>
                                    </div>
                                    <Link to={`/post/${post.post_id}`} className="w-fit flex items-center justify-center p-2 rounded-full border-2 border-white hover:pl-6 transition-all duration-300"><box-icon name='arrow-back' rotate={180} color='white' size='20px'></box-icon></Link>
                                </div>
                            </div>   
                        ))
                    }
            </div>
            <div className="max-w-[1100px] w-full py-4 px-4">
                <h1 className="flex flex-row items-center text-3xl font-Robot font-bold w-full">Related Post <hr className="w-full border-2 border-gray-400"/></h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-feat2 gap-8 md:gap-4 place-items-center">
                {
                        categoryPosts.slice(0,card).map((post,index) => (
                            <div className={`w-full flex flex-col h-full min-[400px]:h-fit md:h-full ${index % 2 == 1 ? 'min-[400px]:flex-row' : 'min-[400px]:flex-row-reverse'} md:flex-row py-4 gap-2 lg:gap-4`} key={post.id}>
                                <div className="max-h-[250px] md:max-h-[380px]">
                                    <img src={`../upload/${post.image}`} alt="" className=" md:max-w-[250px] w-full rounded-md shadow-md object-fill h-full"/>
                                </div>
                                <div className="font-poppins max-w-[350px] md:max-w-[200px] lg:max-w-[250px] flex flex-col justify-between">
                                    <div>
                                        <h1 className="md:text-2xl font-bold ">HALO NAMA SAYA WILLIAM</h1>
                                        <p className="text-xs lg:text-sm py-2 md:py-4">{getText(post.description)}</p>
                                    </div>
                                    <Link to={`/post/${post.post_id}`} className="w-full bg-primary text-white py-2 rounded-sm text-center">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-end w-full py-2">
                    <button className="border-primary border-2 text-primary text-lg px-4 py-2" onClick={() => setCard(i => i + 6)}>View More </button>
                </div>
            </div>
            <div className="max-w-[1100px] w-full py-4 px-4">
                <h1 className="flex flex-row items-center text-3xl font-Robot font-bold w-full">Latest Post<hr className="w-full border-2 border-gray-400"/></h1>
                <div className="w-full grid grid-rows-feat5 min-[380px]:grid-rows-feat4 grid-cols-1 min-[380px]:grid-cols-2 md:grid-rows-feat2 md:grid-cols-4 gap-4 lg:gap-8 place-items-center py-6 lg:px-12">
                    {
                        newestPosts.slice(0,5).map((post,index) => (
                            <div className={`${index == 0 ? 'row-span-2 min-[380px]:col-span-2 ' : 'row-span-1 col-span-1'} grid bg-white w-full h-full grid-rows-1  font-Robot rounded-sm overflow-hidden shadow-md border-2 relative`}>
                                <img src={`../upload/${post.image}`} alt="" className="w-full h-full brightness-75"/>
                                <div className="absolute w-full h-full bg-black opacity-25"></div>
                                <h1 className="text-lg px-2 lg:px-4 py-1 text-center border-white border text-white absolute top-2 right-2">{post.category.charAt(0).toUpperCase() + post.category.slice(1).toLowerCase()}</h1>
                                <div className="px-2 lg:px-4 py-2 lg:py-4 flex flex-col justify-between absolute bottom-0 gap-4">
                                    <div className="text-white flex flex-col gap-2">
                                        
                                        <h1 className="font-bold font-poppinstext-sm">{formatDate(post.postdate)}</h1>

                                        <h1 className={`font-bold pb-2 ${index == 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>{post.title}</h1>
                                        <p className={`${index == 0 ? 'text-md' : ''}`}>{index == 0 ?  getText(post.description) : ''}</p>
                                    </div>
                                    <Link to={`/post/${post.post_id}`} className="w-fit flex items-center justify-center p-2 rounded-full border-2 border-white hover:pl-6 transition-all duration-300"><box-icon name='arrow-back' rotate={180} color='white' size='20px'></box-icon></Link>

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