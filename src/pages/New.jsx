import React from 'react'
import { SectionTexts, SectionTitle } from '../components/SectionText'
import { ProductsData } from '../constants'
import { type } from '@testing-library/user-event/dist/type'
import { ProductsCart } from '../components'

const New = () => {
  return (
    <div className='relative'>
      <div className="container flex flex-col justify-center items-center gap-6 pt-10">
        <SectionTitle title={'new'}/>
        <SectionTexts text={'Our New Products Lorem ipsum dolor sit amet. !'}/>
      </div>

      <div className='gradient-03 z-0'/>
        <div className='flex items-center gap-10 flex-wrap justify-center mt-16 max-[420px]:flex-row'>
          {
            ProductsData.filter(item => item.unique === 'new').map(items => <ProductsCart key={items.id}  {...items}/>)
          }
        </div>

    </div>
  )
}

export default New
