import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen  flex flex-col     sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full h-full md:max-w-md">
      <div className="px-5 py-7">
            <h2 className="text-center mb-3 text-3xl font-semibold text-violet-600">
              Sign Up
            </h2>
            {/* Sign-up form */}
            <form action=""  className='flex flex-col  first-letter:'>
                    <input type="text" placeholder='Name*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <input type="text"  placeholder='Email*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <input type="text"  placeholder='Phone*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <textarea className='p-4 h-36 text-sm text-gray-500 border border-gray-500  outline-none hover:border-violet-700 focus:border-violet-700 w-full resize-none 'placeholder='Message*' ></textarea>
                    <div className='flex gap-x-2 mt-4'>
                      <button className= '  hover:shadow-xl bg-violet-700 hover:bg-violet-800 text-white p-4 text-sm  w-full transition '>
                        Sign Up
                      </button>
                      <button className='  hover:shadow-xl  border p-4  border-violet-800   text-violet-800 w-full transition hover:text-violet-500 hover:border-violet-500 text-sm'>
                        <Link to='/signin'  >Sign In ?</Link>
                      </button>
                    </div>
                  </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
