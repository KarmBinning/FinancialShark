import React from 'react'

interface Props {
  companyName:  string,
  ticker:       string,
  price:        number,
  description:  string,
  imageUrl:     string
};

const Card = ({companyName, ticker, price, description, imageUrl}: Props) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt='Image' />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>
            {description}
        </p>
    </div>
  )
}

export default Card