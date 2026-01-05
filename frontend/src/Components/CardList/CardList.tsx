import React from 'react'
import Card from '../Cards/Card'
import { JSX } from 'react/jsx-runtime'

interface Props {}

const CardList : React.FC = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100} description="iPhone, macOS, iOS..." imageUrl='https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049' />
        <Card companyName='Microsoft' ticker='MSFT' price={200} description="Windows, MS Office, XBox..." imageUrl='https://www.microsoft.com/favicon.ico' />
        <Card companyName='Tesla' ticker='TSLA' price={300} description="Automotive Industry company that shifts away from fossil fuels..." imageUrl="https://m.media-amazon.com/images/I/41Nx6c+5DhL._AC_UF350,350_QL80_.jpg" />
    </div>
  )
}

export default CardList