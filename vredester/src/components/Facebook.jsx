import React from 'react'

export default function Facebook() {
  return (
    <div>
      <div className="bg-[#f0f2f5]">
      <div className="px-44 py-20 flex justify-evenly gap-8">
          <div className="flex flex-col">
            <span className='text-blue-600 font-bold text-4xl my-2'>facebook</span>
            <span className="text-3xl text-slate-900 font-semibold">Recent logins</span>
            <span className="text-gray-600">Click your picture or add an account.</span>
          <div className="flex gap-8 mt-2">
            <div className="grid rounded cursor-pointer hover:shadow-sm hover:shadow-gray-300">
              <img src="" alt="" className='h-44 bg-black w-40 rounded-t-lg'/>
              <span className='p-3 text-center font-semibold bg-white outline-none -mt-1 rounded-b-lg'>Peace</span>
            </div>
            <div className="grid rounded cursor-pointer hover:shadow-lg hover:shadow-gray-300">
              <img src="" alt="" className='h-44 bg-black w-40 rounded-t-lg'/>
              <span className='p-3 text-center font-semibold bg-white outline-none -mt-1 rounded-b-lg'>Peace</span>
            </div>
          </div>
          </div>
          <div className=' w-1/3 items-center justify-center'>
          <div className="bg-white p-4 rounded-xl shadow-black shadow-sm items-center justify-center">
            <div className='grid gap-8 text-xl'>
              <input type="tel" placeholder='Email address or phone number' className='outline outline-1 p-2 w-full outline-gray-300 rounded py-3 focus:outline-blue-600' />
              <input type="password" placeholder='Password' className='outline outline-1 p-2 w-full outline-gray-300 rounded py-3 focus:outline-blue-600' />
              <button className='w-full bg-blue-600 text-white font-semibold p-3 rounded-lg'>Log in</button>
              <div className="items-center justify-center text-center">
              <a href="" className='text-blue-600 hover:border-b border-blue-600'>Forgotten password?</a>
              </div>
              <div className="bg-gray-300 h-[1px] w-full "></div>
            </div>
            <div className="flex items-center justify-center text-white font-bold">
            <button className='bg-green-500 p-3 rounded-lg items-center justify-center mt-3 hover:bg-green-600'>Create New Account</button>
            </div>
          </div>
          <br />
          <div className="items-center justify-center text-center">
            <span className="items-center justify-center"><a className="font-bold cursor-pointer hover:border-b border-black">Create a Page</a> for a celebrity, brand or business.</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
