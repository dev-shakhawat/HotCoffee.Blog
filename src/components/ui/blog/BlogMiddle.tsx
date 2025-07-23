import React from 'react'
import BlogCart from '../../common/BlogCart'

export default function BlogMiddle() {
  return (
    <div className='md:mt-7 mt-5 flex flex-col md:flex-row  gap-5 '>
        <BlogCart className='flex-col-reverse shadow-lg  '  />
        <BlogCart className='flex-col-reverse shadow-lg  '  />
        <BlogCart className='flex-col-reverse shadow-lg  '  />
    </div>
  )
}
