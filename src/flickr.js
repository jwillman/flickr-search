export function flickrSearch(searchstring, results) {
    const serverUrl = `https://flickr-search-server.azurewebsites.net/api/FlickrSearch?searchstring=${searchstring}&results=${results}`;

    console.log(`Flickr search called with ${searchstring} ${results}`);

    const callServer = async () => {
        const response = await fetch(serverUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseJson = await response.json();
        return responseJson.photoUrls;
    };

    return callServer();
}
