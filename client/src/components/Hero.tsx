import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";

function Hero() {
    const [quote, setQuote] = useState('Cooking...')
    const url = 'https://api.api-ninjas.com/v1/quotes?category=food'
    const apiKey = 'G+iMakOXCvnF4un9ns1/cA==pQwnDdYnmVBCIXeP'

   
    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then((res)=> {
            setQuote(res.data[0].quote)
        })
    }, [])

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center">
            <div className="hero-text d-flex flex-column justify-content-center align-items-center">
                <h1>Recipe Roulette</h1>
                <p className="text-center w-75">{quote}</p>
                <form className="d-flex mt-3" onSubmit={handleSearch}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search For Recipe"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

        </section>
    )
}

export default Hero;