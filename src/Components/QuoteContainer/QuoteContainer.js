import { getRandomQuote } from '../../apiCalls/apiCalls';
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './QuoteContainer.css'

const QuoteContainer = () => {

    const [quote, setQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true) ;

    useEffect(async () => {
        const getQuote = await getRandomQuote()
        setQuote(getQuote)
        setIsLoading(false)
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
