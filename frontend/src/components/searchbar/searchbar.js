import React from "react";
import { SearchBarContainer } from "./searchbar.styles";

const SearchBar = () => {

    return (
        <SearchBarContainer>
            <div className="left">
                <input className="search" type='text' placeholder="Search posts..."></input>
            </div>
            <div className="right">
                <div className="option">
                    <p>Liked</p>
                </div>
                <div className="option">
                    <p>Friends</p>
                </div>
                <div className="option">
                    <p>Followed</p>
                </div>
            </div>
        </SearchBarContainer>
    )

}

export default SearchBar