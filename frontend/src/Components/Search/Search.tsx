import React, { JSX, MouseEvent, SyntheticEvent } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = React.useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        console.log(e);
    }


  const onClick = (e: SyntheticEvent) => { //MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} />
    </div>
  )
}

export default Search