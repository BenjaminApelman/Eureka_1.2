import React, { useState, useEffect } from 'react';
import { quotes, NUMBER_OF_QUOTES } from './Quotes'; // Adjust the import path as per your file structure
import "./CSS/QuotesBox.css"

const QuoteBox = () => {
    const [currentQuote, setCurrentQuote] = useState(null);

    useEffect(() => {
        // Function to generate a random quote when the component mounts
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random() * NUMBER_OF_QUOTES)+1;
            setCurrentQuote(quotes[randomIndex]);
        };

        // Call getRandomQuote when the component mounts (page reload)
        getRandomQuote();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="quote-box">
            {currentQuote && (
                <div className="quote">
                    <p>{currentQuote.quote}</p>
                    <p>- {currentQuote.author}</p>
                </div>
            )}
        </div>
    );
};

export default QuoteBox;
