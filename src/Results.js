function Results(props) {
    if (props.photoUrls != null) {
        const resultItems = props.photoUrls.map((x, index) => (
            <img className="image" alt="Flickr" src={x} key={index} />
        ));
        return <div id="results">{resultItems}</div>;
    } else {
        return <div id="results"></div>;
    }
}

export default Results;
