const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search For Friends</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search.... "
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;