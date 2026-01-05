import React from 'react'
import { JSX } from 'react/jsx-runtime'

interface Props {
  companyName:  string,
  ticker:       string,
  price:        number,
  description:  string,
  imageUrl:     string
};

const Card : React.FC<Props> = ({companyName, ticker, price, description, imageUrl}: Props) : JSX.Element => {
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