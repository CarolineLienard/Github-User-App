import iconSearch from "../assets/icon-search.svg"

function Search () {
    return (
        <form className="flex center" action="post" role="search">
            <div>
            <img src={iconSearch} alt="" />
            </div>
            <input type="search" autoComplete="off" placeholder="Search GitHub username..." name="value" id="initial-input" />
            <input type="search" autoComplete="off" placeholder="Search..." name="value" id="responsive-input" />

            <div className="button flex end">
            <button type="submit">Search</button>
            </div>
      </form>
    )
}

export default Search