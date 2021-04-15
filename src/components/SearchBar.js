import React from 'react';

function SearchBar({keyword, setKeyword, searchingFor}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e, e.target.input)

    }

    const handleChange = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Character Search</p>
                        <input 
                            name="name"
                        />
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;
