import React from 'react'
import { initialItems } from './Utils'
import { useState,useMemo } from 'react'

const Usememop = () => {
    const [count,setCount] = useState(0)
    const [items,setItems] = useState(initialItems)
    const selectedItem = useMemo(() => items.find((item) => item.id == count),[items,count])
  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Usememop
