import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContextState } from "../context/authContext";
import Swal from 'sweetalert2'

const SingleBlogPage = () => {
    const [categoryPosts,setCategoryPosts] = useState([]);
    const [singlePosts,setSinglePosts] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const {User} = AuthContextState()

    const notification = Swal.mixin({
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

    const postID = location.pathname.split("/")[2]

    useEffect(() => {
        const fetchDataCategoryPost = async () => {
            try{
                const Res = await axios.get(`/api/posts`)
                setCategoryPosts(Res.data);
            }catch(err){
                console.log(err)
            }
        }
        const fetchDataSinglePost = async () => {
            try{
                const Res = await axios.get(`/api/posts/${postID}`)
                setSinglePosts(Res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchDataCategoryPost()
        fetchDataSinglePost()
    },[])

    const deletePost = async() => {
        try{
            const Res = await axios.delete(`/api/posts/${postID}`)
            if(Res.status <= 400){
                notification.fire({
                    icon: 'success',
                    title: 'Post has been deleted'
                  })
                    setTimeout(() => {
                        navigate("/")
                    }, 3000);
            }
        }catch(err){
            console.log(err)
        }
    }

    const formatDate = (originalDate) => {
        const dateObject = new Date(originalDate);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }

    return(
        <div className="w-full flex items-center justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-2 md:grid-cols-3 py-4 gap-4 lg:gap-12 px-2">
                <div className="col-span-2 flex flex-col ">
                    <img  src={`../public/upload/${singlePosts.image}`} alt=""  className="max-h-[300px] w-full"/>
                    <div className="flex flex-row items-center py-4 gap-1 min-[350px]:gap-4">
                        <img src={singlePosts.uimage} alt="" className="w-14 h-12 rounded-full border border-gray-500"/>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col font-poppins text-gray-500 text-sm sm:text-md">
                                <h1 className="font-bold ">{singlePosts.username}</h1>
                                <h1>Posted on {formatDate(singlePosts.postdate)}</h1>
                            </div>
                            {
                                User.username === singlePosts.username ? 
                                <div className="flex flex-row items-center gap-2">
                                    <button onClick={deletePost} className="p-2 flex justify-center items-center bg-red-500 rounded-full"><box-icon name='trash' color='white'></box-icon></button>
                                    <Link to={`/createblog?edit=2`} state={singlePosts} className="p-2 flex justify-center items-center bg-green-500 rounded-full"><box-icon name='pencil' color='white'></box-icon></Link>
                                </div> :
                                ''
                            }
                        </div>
                    </div>
                    <div className="font-Robot text-gray-500">
                        <h1 className="text-3xl font-bold py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
                        
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 font-poppins text-gray-600">
                    <h1 className="text-2xl font-bold pb-2 f">Post you may like</h1>
                    <div className="w-full grid grid-rows-SingleBlogHP min-[500px]:grid-cols-2 min-[500px]:grid-rows-SingleBlog md:grid-cols-none md:grid-rows-relatedPost gap-4 ">
                    {
                        categoryPosts.slice(0,2).map((post,index) => (
                            <div className= "w-full h-full grid grid-rows-2 font-Robot rounded-sm overflow-hidden  relative">
                                <img src={post.image} alt="" className="w-full h-full"/>
                                <div className="py-2 lg:py-4 flex flex-col justify-between">
                                    <div className="text-gray-500">
                                        <h1 className="text-md px-2 lg:px-4 py-2 text-center bg-primary text-white absolute top-[50%] right-0 w-1/2 translate-x[-50%] translate-y-[-50%]">{post.category}</h1>
                                        <h1 className="font-bold font-poppins text-gray-500 text-sm">{formatDate(post.postdate)}</h1>

                                        <h1 className="font-bold pb-2 text-xl">{post.title}</h1>
                                    </div>
                                    <button className="py-2 px-4 border-primary text-primary border-2 w-[200px] rounded-sm hover:bg-gray-100 transition-all duration-300">Read More</button>

                                </div>
                            </div>   
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage