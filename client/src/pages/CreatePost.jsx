import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import {useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from "moment";

const CreatePost = () => {
    const editPost = useLocation().state
    const [title, setTitle] = useState(editPost?.title || "");
    const [image, setImage] = useState(editPost?.image || "")
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(editPost?.image || "")
    const [category, setCategory] = useState(editPost?.category || "");
    const [description, setDescription] = useState(editPost?.description || "");
    const navigate = useNavigate()
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
    const options = [
        { id: 1, label: 'Art', value: 'art' },
        { id: 2, label: 'Science', value: 'science' },
        { id: 3, label: 'Technology', value: 'technology' },
        { id: 4, label: 'Cinema', value: 'cinema' },
        { id: 5, label: 'Design', value: 'design' },
        { id: 6, label: 'Food', value: 'food' },
      ];
    
      const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("/api/upload", formData);
          if(res.status > 400){
              notification.fire({
                icon: 'error',
                title: 'You Must Login First'
              })
              Warning = true

          }
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        let Warning = false
        if(title.length >= 40 ){
          notification.fire({
            icon: 'error',
            title: 'Title is more than 40 character'
          })
          Warning = true
        }
        if(title.length <= 20 ){
          notification.fire({
            icon: 'error',
            title: 'Title is less than 20 character'
          })
          Warning = true
        }

        if(description >= 255){
          notification.fire({
            icon: 'error',
            title: 'description is more than 255 character'
          })
          Warning = true
        }
        if(description <= 40){
          notification.fire({
            icon: 'error',
            title: 'description is less than 40 character'
          })
          Warning = true
        }
        if(!category){
          notification.fire({
            icon: 'error',
            title: 'Pick Category'
          })
          Warning = true
        }
        if(!image){
          notification.fire({
            icon: 'error',
            title: 'Pick Image'
          })
          Warning = true
        }

        if(!Warning){
          const imgUrl = await upload();
          try {
            editPost
              ? await axios.put(`/api/posts/${editPost.id}`, {
                  title,
                  description: description,
                  category,
                  image: fileName ? imgUrl : "",
                })
              : await axios.post(`/api/posts/`, {
                  title,
                  description: description,
                  category,
                  image: fileName ? imgUrl : "",
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
                notification.fire({
                  icon: 'success',
                  title: 'Post has been added'
                })
                  setTimeout(() => {
                      navigate("/")
                  }, 3000);
          } catch (err) {
            console.log(err);
          }
        }
      };

    const handleOptionChange = (value) => {
        setCategory(value);
    };
    return(
        <div className="w-full flex justify-center ">
            <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-3 py-8 gap-8 px-4">
                <div className='flex flex-col gap-2'>
                    <form className='border-2 p-2'>
                        <h1 className='font-poppins font-bold text-primary pb-2'>Category </h1>
                        <div className='grid grid-cols-2 gap-2'>
                            {options.map((option) => (
                                <div key={option.id} className='flex flex-row items-center gap-2 text-primary'>
                                    <div 
                                    className={`${category == option.value ? 'bg-primary border-none' : 'bg-none'} w-4 h-4 border-2 border-gray-400 rounded-md`} 
                                    onClick={() => document.querySelector(`.radio${option.id}`).click()} 
                                    >
                                    </div>
                                    
                                    <input
                                        type="radio"
                                        name="radioGroup"
                                        value={option.value}
                                        checked={category === option.value}
                                        onClick={() => handleOptionChange(option.value)}
                                        hidden
                                        className={`radio${option.id}`}
                                    />
                                    {option.label}
                                </div>
                                ))}
                        </div>
                    </form>
                    <form
                        onClick={() => document.querySelector(".input-field").click()} 
                        className='flex flex-col justify-center items-center p-6 border-2 h-[300px]'
                        >
                            <input type="file" accept='image/*' className='input-field' hidden 
                            onChange={({ target: {files}}) => {
                                files[0] && setFileName(files[0].name)
                                setFile(files[0])
                                console.log(files)
                                if(files){
                                    setImage(URL.createObjectURL(files[0]))
                                }
                            }}
                            />
                            {image ?
                                <img src={image} alt={fileName} className='w-full h-full'/>
                            : 
                                <>
                                <MdCloudUpload color='#1475cf' size={60} />
                                <p>Browse Files to upload</p>
                                </>
                        }
                    </form>

                    <section className='flex flex-row justify-between items-center bg-blue-50 py-1 px-2 rounded-md'>
                        <AiFillFileImage color='#1475cf' />
                        <span className='flex flex-row gap-2 items-center'>
                        <h1 className='overflow-hidden max-w-[200px]'>{fileName}</h1> - 
                        <MdDelete
                        onClick={() => {
                            setFileName("No selected File")
                            setImage(null)
                        }}
                        color='red'
                        size="25px"
                        />
                        </span>
                    </section>
                </div>
                <div className="flex flex-col md:col-span-2 gap-8">
                    <input type="text" placeholder="Title" className="px-2 py-2 focus:outline-none border-2 border-gray-300 rounded-sm" 
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <ReactQuill theme="snow" value={description} onChange={setDescription} className='h-[300px]'/>
                    <button className='w-full bg-primary py-2 mt-8 text-white text-lg font-poppins brightness-75 hover:brightness-100 duration-300 transition-all rounded-sm' onClick={handleClick}>
                        Create
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CreatePost