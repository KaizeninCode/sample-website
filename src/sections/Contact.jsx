import React from 'react'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='w-full m-auto flex flex-1 justify-center items-center'>
        <img src="/images/contact.png" alt="Contact" className='h-[520px] w-2/5 rounded-2xl bg-cover mx-auto mt-12' />
        <div className='mt-12 border-white w-3/5 mr-12 flex flex-col items-center justify-center h-[520px]'>
          <h1 className='font-palanquin font-bold text-3xl'>We'd love to hear from you.</h1>
          <form className='flex flex-1 flex-col justify-center gap-5 border-slate-gray w-full rounded-2xl'>
            <div className='flex items-center justify-evenly'>
              <div className='w-full flex flex-col items-start justify-center pl-10'>
                <label htmlFor="name" className='ml-5'>Name</label>
                <input type="text" id="name" className='w-80 rounded-3xl h-10'/>
              </div>
              <div className='w-full flex flex-col items-start justify-center pl-10'>
                <label htmlFor="email" className='ml-5'>Email</label>
                <input type="email" id="email" className='w-80 h-10 rounded-3xl'/>
              </div>
            </div>
            <div className='w-full flex flex-col items-start justify-center pl-10'>
              <label htmlFor="text" className='ml-5'>Message</label>
              <textarea id='text' placeholder='Enter message here' className='w-[700px] rounded-xl mt-1 h-48 pt-1 px-2'></textarea>
              <div className='mx-auto mt-8'>
                <Button/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
