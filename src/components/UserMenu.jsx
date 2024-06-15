import { Link } from "react-router-dom";
const UserMenu = () => {
    return (
        <div>
            <div className='min-h-32 bg-accent w-48 top-32 md:top-16 right-8 absolute rounded-md shadow-xl px-2 py-3'>
                <Link to='/register'>
                    <button className="text-center px-4 py-1 bg-secondary text-accent w-full rounded-md text-lg font-bold mb-4 shadow-md hover:bg-transparent hover:border hover:border-secondary hover:text-secondary ">Create account</button>
                </Link>

                <Link to='/login'>
                    <button className="text-center px-4 py-1 bg-warning text-accent w-full rounded-md text-lg font-bold shadow-md hover: border-warning hover:text-warning hover:bg-transparent hover:border-2">Login</button>
                </Link>
                
                
            </div>
        </div>
      );
};

export default UserMenu;
