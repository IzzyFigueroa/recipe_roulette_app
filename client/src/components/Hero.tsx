import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";
import { Recipe } from '../interfaces';

interface HeroProps {

    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;

}

const Hero: React.FC<HeroProps> = ({ setRecipes, setSearchQuery, searchQuery }: HeroProps) => {

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/search', {
        params: { search: searchQuery }
      });
      setRecipes(response.data.results.map((resultObj: any) => ({
        ...resultObj, 
        ingredients: resultObj.ingredients.split('|').join('\n')
      })));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center">
      <div className="hero-text d-flex flex-column justify-content-center align-items-center">
        <h1>Recipe Roulette</h1>
        <p className="text-center w-75">{quote}</p>
        <p className="text-center w-75">Find the best recipes for your taste!</p>
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
  );
};

export default Hero;