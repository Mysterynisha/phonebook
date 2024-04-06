import React from 'react'

const Container = ({data}) => {
  return (
    <div>
      
        <div className='detail'>
        <h2>{data.Name}-{data.Phone}</h2>
        </div>
    </div>
  )
}

export default Container