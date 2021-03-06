import { getRandomQuote, getRandomMeme } from '../../apiCalls/apiCalls';
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './QuoteContainer.css'

const QuoteContainer = () => {

    const [quote, setQuote] = useState({});
    const [memeURL, setMemeURL] = useState('')


    useEffect(async () => {
        const getQuote = await getRandomQuote()
        const blob = await getRandomMeme()
        const getMeme = URL.createObjectURL(blob)
        setQuote(getQuote)
        setMemeURL(getMeme)
      }, []);

    const displayTags = () => {
        if (!quote.tags){
            return <div>loading...</div>
        } else{
            return quote.tags.map((tag, i) =>{
                return <p 
                  key={i}
                  className="tag">{tag}
                  </p>
            });
        }
    }
    return (
        <div className='quote-container'>
        {memeURL ? <img src={memeURL}  className='meme' /> : <div className="loader"></div>}
            <div className='inner-quote-container'>

                {quote._embedded ? <h1 className="title">Random {quote._embedded.author[0].name} quote</h1>: 
                <div>loading...</div>}

                <div className="data-container">
                    <h1 className="author">Behold...</h1>
                    <p className="value">{quote.value}</p>

                    <div className="tags-container">
                        <h3 className="subtitle">Tags</h3>
                        {displayTags()}
                    </div>

                    <div className="date-container">
                        <h3 className="subtitle">Created</h3>
                        <p className="tag">{moment(quote.created_at).format('LLL')}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuoteContainer
