import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the email and password to your backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <form className="w-80 max-w-sm bg-Lightwarning shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <Link to='/'>
          <h2 className="text-warning font-bold text-3xl text-center">FOODIE</h2>
        </Link>
        <h2 className="text-2xl text-center font-semibold mb-6 text-primary">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className='w-4 h-4 absolute mr-3 right-0 top-10 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <button
          className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
          type="button"
        >
          <FaGoogle className="text-primary mr-2" />
          Login with Google
        </button>
        <p className='py-2 text-sm'>Don't have an account? <span className='text-primary'><Link to='/register'>Create Account</Link></span></p>
      </form>
    </div>
  );
};

export default Login;
