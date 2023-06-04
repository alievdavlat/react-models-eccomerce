import React from 'react'
import { Button } from '@mui/material'
import AddButton from './AddButton'

const ProductsCart = ({id, imgUrl, name, text, price, unique}) => {
  return (
    <div className='w-[370px] h-[500px] max-[420px]:w-[340px] bg-slate-600 rounded-[20px] relative'>
        {
          unique.length > 0 &&       <span className='w-[60px] h-[40px] bg-[#5A5AC9] text-[17px] text-white absolute right-2 top-2 flex items-center justify-center rounded-[8px] px-10'> {unique}</span>

        }
      <div className='w-full h-[300px] rounded-[20px] mb-[15px]'>
          <img src={imgUrl} className='w-full object-cover h-full rounded-[20px]' alt={name} />
      </div>
        <div className='flex flex-col gap-5 px-2' >
          <h3 className='font-bold text-lg text-white'>{name}</h3>
          <p className='text-[18px] text-white h-[60px]'>
            {text}
          </p>
          <div className='w-full flex items-center justify-between text-white'>
            <h4 className='font-bold text-[21px]'>
             Price: {price}$
            </h4>
            <AddButton/>
          </div>
        </div>
      
    </div>
  )
}

export default ProductsCart
