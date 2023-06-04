import React from 'react'
import { SectionTexts, SectionTitle } from '../components/SectionText'
import { Slide } from '../components'

const NewProducts = ({text, title, dataFilter}) => {
  return (
    <div className='mb-[70px]'>
      <div className='flex items-center justify-center container pb-24 gap-1 flex-col'>
        <SectionTitle title={title}/>
        <SectionTexts  text={text}/>
      </div>
      <div className="w-[1700px] mx-auto">
      <Slide toShow={4}  dataFilter={dataFilter} />
      </div>

    </div>
  )
}

export default NewProducts
