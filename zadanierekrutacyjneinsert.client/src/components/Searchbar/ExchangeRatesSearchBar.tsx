type ExchangesSearchBarProps = {
    searchInput: string,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const ExchangesSearchBar: React.FC<ExchangesSearchBarProps> = ({ searchInput, setSearchInput }) => {

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue)
    }

    return (
        <div className="container list-container">
            <input placeholder="Euro, USD..." className="search-input" type="text" onChange={e => handleSearchInputChange(e)} value={searchInput} />
        </div>
    )
}

export default ExchangesSearchBar;