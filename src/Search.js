function Search(props) {
    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };
    let handleChange = (e) => {
        props.setSearchString(e.target.value);
        props.setOffset(0);
    };
    let optimisedHandleChange = debounce(handleChange, 500);
    return <input onChange={optimisedHandleChange}></input>;
}

export default Search;
