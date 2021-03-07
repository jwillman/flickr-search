// TODO error handling

export function getPhotoUrls(searchstring, results, offset) {
    const serverUrl = `https://flickr-search-server.azurewebsites.net/api/FlickrSearch?searchstring=${searchstring}&results=${results}&offset=${offset}`;

    console.log(
        `Flickr search called with searchstring: ${searchstring} results: ${results} offset: ${offset}`
    );

    async function fetchPhotoUrls() {
        const response = await fetch(serverUrl);
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson.photoUrls;
    }

    return fetchPhotoUrls();
}
