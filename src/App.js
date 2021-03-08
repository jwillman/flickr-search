import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { getPhotoUrls } from "./api.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

// TODO move the components into their own files/modules

function App() {
    const [searchString, setSearchString] = useState(null);
    const [photoUrls, setPhotoUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const resultsPerQuery = 4;
    const infiniteScroll = useRef(null);

    useEffect(() => {
        if (searchString != null) {
            if (searchString === "") {
                setPhotoUrls([]);
            } else {
                setLoading(true);
                getPhotoUrls(searchString, resultsPerQuery, offset).then(
                    (result) => {
                        if (offset === 0) {
                            setPhotoUrls(result);
                        } else {
                            setPhotoUrls((oldArray) =>
                                [...oldArray].concat(result)
                            );
                        }

                        setLoading(false);
                    }
                );
            }
        }
    }, [searchString, offset]);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "10px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (infiniteScroll.current) {
            observer.observe(infiniteScroll.current);
        }
    }, []);

    // infinite scroll handler
    const handleObserver = (entities) => {
        console.log("handleObserver called");
        const target = entities[0];
        if (target.isIntersecting) {
            setOffset((offset) => offset + resultsPerQuery);
        }
    };

    return (
        <div className="App">
            <h1>Flickr search</h1>
            <Search setSearchString={setSearchString} setOffset={setOffset} />
            <Results photoUrls={photoUrls} />
            <LoadingIndicator loading={loading} />
            <span ref={infiniteScroll}></span>
        </div>
    );
}

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

function LoadingIndicator(props) {
    if (props.loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    } else {
        return <span></span>;
    }
}

export default App;
