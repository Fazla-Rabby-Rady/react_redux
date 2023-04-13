import React from 'react'

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className=' flex justify-center items-center'>
        <p className=' text-slate-500'>Copyright by <span className=' text-lg font-semibold text-green-700'>Fazla Rabby Rady</span> @{year}</p>
    </div>
  )
}

export default Footer