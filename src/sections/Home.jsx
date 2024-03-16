import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
const Home = () => {
  return (
    <section id='home'>
        
        <div className='flex justify-center min-h-screen gap-10'>
            <div className='w-1/2 ml-8 mt-5 bg-image h-[500px]  border-slate-900 rounded-xl my-auto '>
                <img src='/images/vector.png' alt="" className='bg-cover rounded-xl h-[520px]'/>
            </div>
            <div className='w-2/5 ml-16 flex flex-col justify-center'>
                <p className='text-xl font-palanquin my-10 mr-16 border-red-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi nostrum nesciunt! Odit laboriosam, ea consequuntur fuga, maxime culpa officia totam quas quia dolorum vel in nulla laudantium eum, incidunt porro eius unde minima? Sed quaerat consectetur unde debitis nam ex veritatis fuga aut mollitia, alias quo nesciunt explicabo, cum quas nostrum consequuntur, nobis recusandae modi. <br /><br /> Ea, ad. Repudiandae veniam at, unde sapiente maxime esse nihil magni quod vitae fugit vero quo provident nemo itaque odit quae eveniet cum excepturi aspernatur inventore maiores fugiat? Necessitatibus, eligendi? Alias voluptatum eveniet cupiditate nisi perspiciatis libero placeat cumque enim! Dolor ipsum quos doloribus!</p>
            </div>
        </div>
    </section>
  )
}

export default Home
