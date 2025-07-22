import React from 'react'


interface containerProps {
    children: React.ReactNode
}
export default function Container({children}:containerProps) {
  return (
    <div className='max-w-[1440px] mx-auto'>{children}</div>
  )
}