import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src='https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049' alt='Image' />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>
            This is an American Company.
        </p>
    </div>
  )
}

export default Card