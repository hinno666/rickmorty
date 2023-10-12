import './SearchForm.css'

export const SearchForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
    }

    return (
        <>
            <h2 className="form-title">find your favorite character</h2>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-form-input"
                    name='search'
                    placeholder='character'
                />
                <button type="submit" className='search-form-btn'>search</button>
            </form>
        </>
    )
}
