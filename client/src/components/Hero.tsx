import React, { useState } from 'react';
function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <section className="hero">
            <div className="img"></div>
            <div className="hero-text">
                <h1>Recipe Roulette</h1>
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