//const photosEndpoint = "https://api.flickr.com/services/api/explore/flickr.photos.search";

// TODO stay under 3600 queries per hour
// TODO cache results
export function flickrSearch(searchstring) {
    console.log(`Flickr search called with ${searchstring}`);

    //("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=&text=flower&format=json&nojsoncallback=1");

    // const callFlickrApi = async () => {
    //   const response = await fetch(photosEndpoint, {
    //     method: "POST",
    //     body: "myBody", // string or object
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const myJson = await response.json(); //extract JSON from the http response
    //   // do something with myJson
    // };
}
