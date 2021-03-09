import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useRef } from "react";
import { getPhotoUrls } from "./api.js";
import Search from "./Search";
import Results from "./Results";
import LoadingIndicator from "./LoadingIndicator";

function App() {
    const [searchString, setSearchString] = useState(null);
    const [photoUrls, setPhotoUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const resultsPerQuery = 4;
    const infiniteScroll = useRef(null);

    useEffect(() => {
        if (searchString == null) return;
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

export default App;
