/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import arrowImg from '../Pages/right-arrow.png';
import Spinner from '../Spinner';
import  toast  from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

function Chat() {
    const [prompt, setPrompt] = useState('');
    const [data, setData] = useState([]);
    const [imagedata, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const navigate = useNavigate()

    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('Name');

    const apiData = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const url = `http://localhost:8080/api/v1/chats?message=${encodeURIComponent(prompt)}`;
            if(!token){
                toast.error("You Are Not Authorized")
                navigate('/login')
                  throw new Error(`You Are Not Authorized ! Status: ${401}`);
            }
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json(); // Parse JSON response

            // Save the current prompt and response in the data array
            setData((prev) => [
                ...prev,
                { prompt, response: responseData }
            ]);

            setPrompt(''); // Clear prompt after successful API call
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
        } finally {
            setLoading(false);
        }
    };

    const upload = async () => {
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append('file', file);

            try {
                const res = await axios.post('http://localhost:8080/upload', formData);
                const response = res.data;

                // Handle success if needed
                setImageData((prevData) => [
                    ...prevData,
                    { response }
                ]);
            } catch (err) {
                console.error('Error uploading file:', err);
                // Handle error
            } finally {
                setLoading(false);
                setFile(null); // Clear file state after successful upload
            }
        } else {
            console.log("Error while selecting file");
        }
    };

    const deleteChats = () => {
        setData([]);
        setImageData([]);
    };

    return (
      <form onSubmit={apiData}>
            <div className="min-h-[535px] flex flex-col justify-around md:flex-row">
                <div className="rounded-sm w-full md:w-48 h-full py-4 flex flex-col items-center  mb-4 md:mb-0">
                    <button type='button' onClick={deleteChats} className="text-white border white px-8 py-1 text-sm rounded-md">+ New Chat</button>
                </div>
                <div className="bg-[#212121] min-h-full w-full flex flex-col justify-between">
                    <h1 className="mt-3 text-center md:mr-28 md:inline-block text-3xl hidden font-Montserrat font-semibold">My-Gpt</h1>
                    <ul className='ml-4 md:ml-32 flex flex-col gap-5'>
                        {data.map((item, index) => (
                            <li key={index} className="text-white m-2">
                                <p className='text-white'><strong className='text-green-600 px-2'> {userName} </strong>{item.prompt}</p>
                                <div className='flex items-center gap-4'>
                                    <p><strong className='text-green-600 px-2'><img className="max-w-8 max-h-8 cursor-pointer" src="../chatgpt-openai.png" alt="" /></strong></p>
                                    <p className='text-xs  md:mr-20 leading-5'>{item.response}</p>
                                </div>
                            </li>
                        ))}
                        {imagedata.map((item, index) => (
                            <li key={index} className="text-white m-2">
                                <p className='text-white'><strong className='text-green-600 px-2'> {userName} </strong>Examine The Picture</p>
                                <div className='flex items-center gap-4 mt-4'>
                                    <p><strong className='text-green-600 px-2'><img className="max-w-8 max-h-8 cursor-pointer" src="../chatgpt-openai.png" alt="" /></strong></p>
                                    <p className='text-xs  md:mr-20 leading-5'>{item.response}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                              { loading ?  <Spinner/> :""}
                    <div className="grid grid-cols-1 items-center justify-start">
                        <div>
                            <label htmlFor="file-upload" className="custom-file-upload text-white rounded-xl m-3">
                                Select File
                            </label>
                            <input id="file-upload" type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <button type='button' className='text-white px-3 py-2 rounded-lg mx-4 bg-green-800 active:scale-105' onClick={upload}>Upload</button>
                            <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className="text-white outline-none rounded-md my-12 bg-[#212121]" placeholder='Enter Your Prompt' type="text" />
                        </div>
                        <button type="submit" className='absolute right-4 md:right-40 w-6 h-6'><img src={arrowImg} alt="Arrow icon" /></button>
                        <p className='text-white mr-28 text-center'>&copy; Made by Aymaan</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Chat;
