import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const deleteToken = () => {
        localStorage.removeItem('token');
        toast.success('Logout');
        navigate('/');
    };

    return (
        <div className="flex items-center justify-between text-sm mt-2">
            <div className="flex items-center">
                <Link to={'/'}>
                    <img className="w-10 h-10 cursor-pointer" src="../chatgpt-openai.png" alt="" />
                </Link>
                <h1 className="cursor-pointer md:text-xl text font-extrabold">My-GPT</h1>
            </div>
            <ul className='md:flex flex gap-6 mr-14 cursor-pointer items-center'>
                {token ? (
                    <>
                        <li onClick={deleteToken} className="select-none text-black hover:text-white transition-all duration-500 md:inline  cursor-pointer px-3 py-1 rounded-md bg-green-600">Logout</li>
                        <Link to={'/chats'}>
                            <li className="text-black select-none md:inline  hover:text-white transition-all duration-500 px-3 py-1 rounded-md bg-green-600">Go To Chats</li>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to={'/signUp'}>
                            <li className="text-black select-none md:inline-  hover:text-white transition-all duration-500 cursor-pointer px-5 py-1 rounded-md bg-green-600">
                                Register
                            </li>
                        </Link>
                        <Link to={'/login'}>
                            <li className="text-black select-none md:inline  hover:text-white transition-all duration-500 px-5 py-1 rounded-md bg-green-600">
                                Login
                            </li>
                        </Link>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Header;
