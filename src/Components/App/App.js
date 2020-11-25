import './App.css';
import { Clock } from '../Clock/Clock'
import { Form } from '../Form/Form'
import  QuoteContainer  from  '../QuoteContainer/QuoteContainer'
import React, { useEffect, useState } from 'react'
import { getAllTags} from '../../apiCalls/apiCalls';


export const App = () => {
  
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true) ;
  const [tags, setTags] = useState([]) ;
  const [numberOfTags, setNumberOfTags] = useState({});

  useEffect(async () => {
    const tags = await getAllTags()
    const allTags = tags._embedded.tag.map(tag => {
      return tag.value
    })
    setTags(allTags)
    setNumberOfTags({totalTags: tags.count})
  }, [])

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          "latitude": position.coords.latitude,
          "longitude": position.coords.longitude
        }
      setLocation(location)
    }),
    (error) => {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  } else {
    console.log("Not Available");
  }
}

    return (
      
      <div className="App">
         <h1 className="title">Using Hooks for the fisrt time</h1>

         <Clock />

         <Form tags={tags}/>
        
        <QuoteContainer/>

      </div>
    );
  }
