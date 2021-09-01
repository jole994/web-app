import './Search.css'

export const Search = ({setSearchTerm}) => (
    <div className="search">
        <span className="material-icons">search</span>
        <input
            placeholder="Search..."
            type="text"
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
        ></input>
    </div>
)
