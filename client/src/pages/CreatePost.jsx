import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const CreatePost = () => {
    const [value, setValue] = useState('');
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const options = [
        { id: 1, label: 'Art', value: 'Art' },
        { id: 2, label: 'Science', value: 'Science' },
        { id: 3, label: 'Technology', value: 'Technology' },
        { id: 4, label: 'Cinema', value: 'Cinema' },
        { id: 5, label: 'Design', value: 'Design' },
        { id: 6, label: 'Food', value: 'Food' },
      ];
    
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        console.log('test')
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
                                    className={`${selectedOption == option.value ? 'bg-primary border-none' : 'bg-none'} w-4 h-4 border-2 border-gray-400 rounded-md`} 
                                    onClick={() => document.querySelector(`.radio${option.id}`).click()} 
                                    >
                                    </div>
                                    
                                    <input
                                        type="radio"
                                        name="radioGroup"
                                        value={option.value}
                                        checked={selectedOption === option.value}
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
                    <input type="text" placeholder="Title" className="px-2 py-2 focus:outline-none border-2 border-gray-300 rounded-sm"/>
                    <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[300px]'/>
                </div>

            </div>
        </div>
    )
}

export default CreatePost