import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  toast  from 'react-hot-toast';
import axios from 'axios'

export default function SignUp() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')

    const form = async (e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8080/api/v1/register',{
                name,
                email,
                password,
            },{
                headers:{
                    'Content-Type':'application/json',
                    Accept:'application/json'
                }
            }).then((res)=>{
                    console.log(res)
                    toast.success('Account Created Successfully')
                    navigate('/')
                    localStorage.setItem('token',res.data.TOKEN)
                    localStorage.setItem('Name',res.data.Name)
                }
            )
        } catch (error) {
           if(error.response && error.response.status===401 &&error.response.data.Message=='User is already exist' ){
                toast.error('User is already exist')
            }
            else{
                console.error(error);
                toast.error('please fill the from correctly')
            }
        }
    }
  return (
   <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-96 p-3 m-auto bg-#191919 rounded-lg shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700">
                    Register
                </h1>
                <form className="mt-6" >
                    {/* UserName */}
                     <div className="mb-2">
                        <label className="block text-sm font-semibold text-white">
                            UserName
                        </label>
                        <input
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            placeholder='UserName'
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-white  bg-[#212121] border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-white">
                            Email
                        </label>
                        <input
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-white  bg-[#212121]  border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-white">
                            Password
                        </label>
                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-white  bg-[#212121]  border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button onClick={form} type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-900 focus:outline-none focus:bg-green-600">
                            Create An Account
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-white">
                    {" "}
                   Already Have an account?{" "}
                    <Link to="/Login" className="font-medium text-green-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
  )
}


