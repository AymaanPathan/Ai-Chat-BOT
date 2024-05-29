import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  toast  from 'react-hot-toast';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const getForm = async (e) => {
        e.preventDefault();
        try {
           const response =  await fetch('http://localhost:8080/api/v1/login',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            }
            )
             const data = await response.json();
            if (data.Message === 'Success') {
                console.log(data);
                toast.success('Login success');
                localStorage.setItem('token', data.TOKEN);
                localStorage.setItem('Name', data.Name);
                navigate('/');
            } else if (data.Message === 'Incorrect Password') {
                toast.error('Incorrect Password');
            } else if (data.Message === 'User not Registered') {
                toast.error('Incorrect Email Please Register');
            } else {
                toast.error('Please fill the form correctly');
            }
        } catch (error) {
            if(error.response && error.response.status===401 &&error.response.data.Message=='Incorrect Password' ){
                toast.error('Incorrect Password')
            }
            else if(error.response.status===401 &&error.response.data.Message=='User not Registered' ) {
                toast.error('Incorrect Email Please Register')
            }else{
                console.error(error);
                toast.error('please fill the from correctly')
            }
        }
    };


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-96 p-3 m-auto bg-#191919 rounded-lg shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700">
                    Login
                </h1>
                <form className="mt-6" onSubmit={getForm}>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-white">
                            Email
                        </label>
                        <input
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-white bg-[#212121] border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-white">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-white bg-[#212121] border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link to={'/forgetPassword'} href="#" className="text-xs text-green-600 hover:underline">
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-900 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-white">
                    {" "}
                    Dont have an account?{" "}
                    <Link to="/signUp" className="font-medium text-green-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
