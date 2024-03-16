import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className='flex items-centre justify-center'>
        <p className=' font-palanquin w-2/5 m-auto text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam, consectetur nihil aspernatur velit in quia, repudiandae eveniet non minus praesentium amet dolores, quidem inventore laborum doloremque recusandae molestias architecto iste odio? <br /> <br /> Velit fuga est laboriosam repudiandae consequuntur commodi quos, aliquam sed dolorem perspiciatis eius? Magni voluptatem aut distinctio, facilis nobis ullam tempora dolorem iure.</p>
        <img src="/images/about.png" alt="About Image" className='w-1/2 bg-cover rounded-2xl h-[520px]'/>
      </div>
    </section>
  )
}

export default About
