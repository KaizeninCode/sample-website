import React, { useEffect, useState } from 'react'
const Gallery = () => {
    const [images, setImages]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setImages(data.slice(0, 20)))
    },[])

  return (
    <section id='gallery'>
        <h1 className='text-4xl text-center mb-4'>Gallery</h1>
        <div className='w-full border-slate-gray flex flex-wrap justify-center items-center gap-16'>
            {images.map(image => {
                return (
                    <img src={image.url} alt="Image" key={image.id} className='w-1/8 bg-cover rounded-xl h-[200px]'/>
                )})}
        </div>
    </section>
  )
}

export default Gallery
