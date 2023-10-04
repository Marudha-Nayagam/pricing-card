import React from 'react'

function Card({name, price, features}) {
  return (
    <div className='card'>
      <h5>{name} </h5>
      <h1>{price}<span> /month</span> </h1>
      <hr></hr>
      <ul className='ull'>
        {features.map((feature, index) => (
            <li key={index}>{feature} </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  )
}

export default Card
