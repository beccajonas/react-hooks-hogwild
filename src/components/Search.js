import React from "react";

function Search({handleSearch}) {

    function onHandleSearch(e) {
        handleSearch(e.target.value);
    }

    return (
        <div >
          <input
            type="text"
            placeholder="Search by name..."
            onChange={onHandleSearch}
          />
        </div>
      );
}

export default Search