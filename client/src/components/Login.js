import React from 'react'

function Login() {
  return (
    <div className=' bg-gray-200 flex justify-center items-center h-screen'>
      <div className='bg-white w-[394px] h-80 rounded-md px-[24px] py-[32px] ' >  
      <div className='flex h-[132px] bg-red-200 rounded-xl'>
        <div className='' >  <img src='/images/logo.png' className='h-[132px] object-cover'></img> </div>
        <div className='flex flex-col h-[132px] w-[134px] justify-center items-center ml-4'> 
        <div > <p className=' ml-4 text-lg  font-semibold opacity-70'>   اعادة تعيين </p></div>
        <div className='font-bold text-2xl mt-1'> كلمة المرور</div>
        </div>
       
      </div>
      <div className='mt-[32px]'> 
      
      
      
      <input type="text" id="first_name" class="bg-gray-200 w-full rounded-full h-[44px]  px-[10px] py-[20px]  border-none font-bold" placeholder="كلمة السر الجديدة..." required/>
      
      
      </div>
      </div>
    </div>
  )
}

export default Login
