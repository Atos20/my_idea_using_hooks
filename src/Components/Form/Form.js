import React, { useState, useEffect }from 'react'
import './Form.css';


export const Form = (props) =>  {
    const [value, setValue] = useState('');
  

    const updateValue = (event) => {
      event.preventDefault()
      setValue(event.target.value)
    }
    
    const displayAllTags = () => {
      if(props.tags.length === 0) {
        return <div className="loading">loading...</div>
      } else {

        return props.tags.map((tag, i) => {
          return <li 
            onClick={(event) => getTagName(event)}
            key={i}
            id={tag}
            className="tag">{tag}
            </li>
        })
      }
    }

    const getTagName = (event) =>{
      setValue(event.target.id)
    }

    return (
        <form className='form-container'>
        <h1 className="people">This is what Trump talks about</h1>
          <ul className="all-tags">
            {displayAllTags()}
          </ul>
          <input
            className='input search-bar'
            placeholder='search'
            onChange={(event) => updateValue(event)} 
            type="text"
            />
          <input 
            className='input button'
            type="submit"
         />
        </form>
    )
}
