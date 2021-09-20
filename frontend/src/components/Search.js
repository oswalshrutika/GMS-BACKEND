import React, { useState } from 'react';
import SearchList from './SearchList';
function Search({ categories }) {
console.log("🚀 ~ file: Search.js ~ line 4 ~ Search ~ categories", categories)

    const [searchField, setSearchField] = useState("");




    const filteredcategory = categories.filter(
        category => {
            return (
                category
                    .categoryName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );


    const handleChange = e => {
        setSearchField(e.target.value);

    };

   

    return (
        <section className="garamond ">
           

            <div className="pt-2 relative mx-auto text-gray-600">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" onChange={handleChange} />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                </button>
            </div>

            <SearchList filteredcategory={filteredcategory} />

        </section >
    );
}

export default Search;