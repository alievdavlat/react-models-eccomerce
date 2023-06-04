import React from 'react'
import { Button } from '@mui/material'
import { filterItems } from '../constants'


const Filter = ({setFilterName}) => {
  const [ buttonActive, setBUttonActive] = React.useState(1)

  const handleFilter = (id, name) => {
    setBUttonActive(id)
    setFilterName(name)
  } 

  return (
    <div className='flex items-center justify-center gap-16 mt-20 flex-wrap'>
      {
        filterItems.map(item => <Button key={item.id} onClick={() => handleFilter(item.id, item.text)} variant={buttonActive === item.id ? 'contained' : 'outlined'}>{item.text}</Button>)
      }
    </div>
  )
}

export default Filter
