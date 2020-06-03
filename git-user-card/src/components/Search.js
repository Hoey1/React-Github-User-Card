import React from "react";

function Search(props) {
  const { onFocus, onBlur, onChange, onSubmit } = props;
  return (
    <div className="search-wrapper">
      <button id="submit" onClick={onSubmit}>
        Go!
      </button>
      <label>
        Search for a Github user
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          id="search"
          type="text"
          name="search"
          placeholder="search here"
        />
      </label>
    </div>
  );
}

export default Search;
