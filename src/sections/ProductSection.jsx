import React from 'react'
import { SectionTexts, SectionTitle } from '../components/SectionText'
import { Filter, ProductsCart } from '../components'
import { ProductsData } from '../constants'

const ProductSection = () => {

  const [filterName, setFilterName] = React.useState('all')

  return (
    <div className={filterName === 'all' || filterName === 'new' || filterName === 'popular'  ? 'mx-auto relative' : 'container relative'}>
      <div className='flex flex-col items-center justify-center mt-[70px]'>
     <SectionTitle title={"All Products"}/>
      <SectionTexts text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
     </div>

        <Filter setFilterName={setFilterName}/>
        <div className='gradient-02 z-0 right-0'/>

      <div className={`${filterName === 'all' || filterName === 'new' || filterName === 'popular' ? 'overflow-x-scroll flex-wrap justify-center w-full ' : 'flex-wrap'  } flex  max-[420px]:flex-col mt-32 items-center gap-24`}>
        {
          ProductsData.filter(item => item.filter === filterName || item.type === filterName || item.unique === filterName ).slice(0, 8).map( items =>  <ProductsCart key={items.id} {...items}/> )
        }    
      <div className='gradient-04 z-0 right-0'/>  
      </div>

    </div>
  )
}

export default ProductSection
