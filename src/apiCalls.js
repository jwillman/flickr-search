export function searchPhotos(searchstring, results) {
    const serverUrl = `https://flickr-search-server.azurewebsites.net/api/FlickrSearch?searchstring=${searchstring}&results=${results}`;

    console.log(`Flickr search called with ${searchstring} ${results}`);

    async function fetchPhotoUrls() {
        const response = await fetch(serverUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseJson = await response.json();
        return responseJson.photoUrls;
    }

    return fetchPhotoUrls();
}
